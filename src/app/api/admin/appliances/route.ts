import { NextRequest, NextResponse } from 'next/server';
import { applianceUploadFormSchema } from '@/interfaces/ApplianceUploadFormSchema';
import PrismaWrapper from '@/helper/PrismaWrapper';
import { cleanseName, uploadFile } from '@/helper/AWSFileHandler';
import { ApplianceAges, ApplianceTypes } from '@prisma/client';

const prisma = PrismaWrapper;

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const applianceName = formData.get('applianceName')?.toString()!;
  const appliancePrice = parseInt(formData.get('appliancePrice')?.toString()!);
  const applianceBrand = formData.get('applianceBrand')?.toString()!;
  const modelNumber = formData.get('modelNumber')?.toString()!;
  const description = formData.get('description')?.toString()!;
  const imageFile = formData.get('file');
  const age = formData.get('applianceAge')! as ApplianceAges;
  const type = formData.get('applianceType')! as ApplianceTypes;

  const validation = applianceUploadFormSchema.safeParse({
    applianceName,
    appliancePrice,
    modelNumber,
    applianceBrand,
    description,
    imageFile,
    type,
    age,
  });

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

  const cleanApplianceName = await cleanseName(applianceName);

  try {
    const appliance = await prisma.appliances.create({
      data: {
        applianceName,
        price: appliancePrice,
        modelNumber,
        type,
        age,
        description,
        brand: applianceBrand,
      },
    });

    const folder = `appliances/${appliance.id}_${cleanApplianceName}`;
    const fileList = formData.getAll('file') as File[];

    fileList.forEach(async (file: File) => {
      const fileName = await uploadFile(file, folder);

      await prisma.applianceImages.create({
        data: {
          imageUrl: fileName,
          applianceId: appliance.id,
        },
      });
    });

    return NextResponse.json(
      {
        message: 'Success',
        status: 201,
        data: appliance,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
