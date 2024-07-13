'use client';
import { PermitInterface } from '@/interfaces/PermitInterface';
import { PermitInstructions, PermitVideo } from '@prisma/client';
import { useState, useEffect } from 'react';
import PermitCards from '../Cards/PermitCards';

const PermitCardDisplay = () => {
  const [instructions, setInstructions] = useState<PermitInstructions[]>();
  const [video, setVideo] = useState<PermitVideo>();

  useEffect(() => {
    fetch('/api/instructions').then(async (data) => {
      const response = (await data.json()) as ApiResponse<PermitInterface>;

      if (response.status !== 200) return;

      setInstructions(response.data?.instructions);
      setVideo(response.data?.url);
    });
  }, []);

  return (
    <>
      {video && <iframe src={video.url}></iframe>}
      {instructions ? (
        <div className="space-y-3 m-5">
          {instructions.map((instruction) => (
            <PermitCards instruction={instruction} />
          ))}
        </div>
      ) : (
        <div>No instructions found</div>
      )}
    </>
  );
};

export default PermitCardDisplay;
