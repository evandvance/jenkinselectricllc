'use client';
import { useState, useEffect } from 'react';
import { PermitInstructions, PermitVideo } from '@prisma/client';
import { PermitInterface } from '@/interfaces/PermitInterface';
import InstructionCard from './AdminCards/InstructionCard';
import VideoCard from './AdminCards/VideoCard';

const AdminPermitPageDisplay = () => {
  const [oldInstructions, setOldInstructions] =
    useState<PermitInstructions[]>();
  const [instructions, setInstructions] = useState<PermitInstructions[]>();
  const [video, setVideo] = useState<PermitVideo>();
  const [isNewVideo, setIsNewVideo] = useState(true);

  useEffect(() => {
    fetch('/api/instructions').then(async (data) => {
      const response = (await data.json()) as ApiResponse<PermitInterface>;

      if (response.status !== 200) {
        return;
      }

      setVideo(response.data?.url);
      setIsNewVideo(response.data?.url === undefined);
      setInstructions(response.data?.instructions.sort());
      setOldInstructions(response.data?.instructions.sort());
    });
  }, []);

  return (
    <>
      <VideoCard
        video={video}
        setVideo={setVideo}
        isNewVideo={isNewVideo}
        setIsNewVideo={setIsNewVideo}
      />
      <div className="flex flex-col justify-center items-center w-screen space-y-4 m-5">
        {instructions?.map((instruction) => (
          <InstructionCard
            key={instruction.id}
            permitInstruction={instruction}
            allInstructions={instructions}
            originalInstructions={oldInstructions!}
            setAllInstructions={setInstructions}
            setOriginalInstructions={setOldInstructions}
          />
        ))}
        <button
          onClick={() => {
            setInstructions([
              ...(instructions ? instructions : []),
              {
                id:
                  (instructions && instructions.length > 0
                    ? instructions[instructions?.length - 1].id
                    : 0) + 1,
                imageUrl: '',
                description: '',
              },
            ]);
          }}
          className="w-44 h-16 rounded bg-jellcblue text-white "
        >
          Add New Instruction
        </button>
      </div>
    </>
  );
};

export default AdminPermitPageDisplay;
