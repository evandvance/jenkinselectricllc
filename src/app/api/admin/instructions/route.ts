import { NextRequest, NextResponse } from 'next/server';
import { PermitInstructionSchema } from '@/interfaces/PermitInstructionsSchema';
import prisma from '@/helper/PrismaWrapper';
import { uploadFile } from '@/helper/AWSFileHandler';

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const newInstruction = {
    description: formData.get('description')?.toString()!,
    image: formData.get('image') as unknown as File,
  };

  const validation = PermitInstructionSchema.safeParse(newInstruction);

  if (validation.error) {
    return NextResponse.json(
      {
        message: 'Invalid Input',
        status: 400,
        error: validation.error,
      },
      { status: 400 }
    );
  }

  try {
    const imageUrl = await uploadFile(newInstruction.image, `instructions/`);
    const instruction = await prisma.permitInstructions.create({
      data: {
        description: newInstruction.description,
        imageUrl,
      },
    });
    return NextResponse.json(
      {
        message: 'Success',
        status: 201,
        data: instruction,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
