import { NextRequest, NextResponse } from 'next/server';
import PrismaWrapper from '@/helper/PrismaWrapper';
import { uploadFile, cleanseName } from '@/helper/AWSFileHandler';
import { technicianFormSchema } from '@/interfaces/TechnicianUploadFormSchema';

const prisma = PrismaWrapper;

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const firstName = formData.get('firstName')?.toString()!;
  const lastName = formData.get('lastName')?.toString()!;
  const bio = formData.get('bio')?.toString()!;
  const isCertified = formData.get('isCertified') === 'true';
  const image = formData.get('image') as File;

  console.log(isCertified);
  const validation = technicianFormSchema.safeParse({
    firstName,
    lastName,
    bio,
    isCertified,
    image,
  });

  if (validation.error) {
    console.log(validation.error);
    return NextResponse.json({
      message: 'Invalid Input',
      status: 400,
      error: validation.error,
    });
  }

  try {
    const folder = `technicians/${await cleanseName(
      firstName
    )}_${await cleanseName(lastName)}`;

    const imageUrl = await uploadFile(image, folder);

    const technician = await prisma.technicians.create({
      data: {
        firstName,
        lastName,
        isCertified,
        bio,
        imageUrl,
      },
    });

    return NextResponse.json({
      message: 'Success',
      status: 200,
      ...technician,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage);
  }
}

export const dynamic = 'force-dynamic';
