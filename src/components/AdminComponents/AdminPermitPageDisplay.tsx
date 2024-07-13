'use client';
import { useState, useEffect } from 'react';
import { PermitInstructions, PermitVideo } from '@prisma/client';
import { PermitInterface } from '@/interfaces/PermitInterface';
import InstructionCard from './AdminCards/InstructionCard';

const AdminPermitPageDisplay = () => {
  const [oldInstructions, setOldInstructions] =
    useState<PermitInstructions[]>();
  const [instructions, setInstructions] = useState<PermitInstructions[]>();
  const [video, setVideo] = useState<PermitVideo>();

  useEffect(() => {
    fetch('/api/instructions').then(async (data) => {
      const response = (await data.json()) as ApiResponse<PermitInterface>;

      if (response.status !== 200) {
        return;
      }

      setVideo(response.data?.url);
      setInstructions(response.data?.instructions);
      setOldInstructions(response.data?.instructions);
    });
  }, []);

  return (
    <>
      {video && <div>Current Video url is {video.url}</div>}
      <div className="flex flex-col justify-center items-center w-screen space-y-4">
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
                  (instructions
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
