import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { PermitInstructionSchema } from '@/interfaces/PermitInstructionsSchema';
import { uploadFile } from '@/helper/AWSFileHandler';

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    await prisma.permitInstructions.delete({ where: { id } });
    return NextResponse.json({ message: 'Deletion Successful', status: 204 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
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
    const oldInstruction = await prisma.permitInstructions.findUnique({
      where: { id },
      select: { imageUrl: true },
    });

    console.log(newInstruction.image);
    const imageUrl =
      typeof newInstruction.image !== typeof ''
        ? await uploadFile(newInstruction.image, 'instructions')
        : oldInstruction?.imageUrl;

    const instruction = await prisma.permitInstructions.update({
      where: { id },
      data: { description: newInstruction.description, imageUrl },
    });

    return NextResponse.json(
      {
        message: 'Technician Successfully Updated',
        status: 200,
        data: instruction,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: 'An error has occured', status: 500 },
      { status: 500 }
    );
  }
}
export const dynamic = 'force-dynamic';
