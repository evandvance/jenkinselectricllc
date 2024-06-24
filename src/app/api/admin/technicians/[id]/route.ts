import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { editTechnicianSchema } from '@/interfaces/TechnicianUploadFormSchema';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    await prisma.technicians.delete({ where: { id } });
    return NextResponse.json(
      {
        status: 204,
        message: 'Technician Deleted Successfully',
      },
      { status: 204 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: 'An error has occured', status: 500 },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const formData = await req.formData();

  const firstName = formData.get('firstName')?.toString()!;
  const lastName = formData.get('lastName')?.toString()!;
  const bio = formData.get('bio')?.toString()!;
  const isCertified = formData.get('isCertified') === 'true';

  const validation = editTechnicianSchema.safeParse({
    firstName,
    lastName,
    bio,
    isCertified,
  });

  if (validation.error) {
    console.log(validation.error);
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
    const technician = await prisma.technicians.update({
      where: { id },
      data: { firstName, lastName, bio, isCertified },
    });

    return NextResponse.json(
      {
        message: 'Technician Successfully Updated',
        status: 200,
        data: technician,
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
