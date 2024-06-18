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
  const age: ApplianceAges | any = formData.get('applianceAge')!;
  const type: ApplianceTypes | any = formData.get('applianceType')!;

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
    return NextResponse.json({
      message: 'Invalid Input',
      status: 400,
      error: validation.error,
    });
  }

  const cleanApplianceName = cleanseName(applianceName);

  try {
    const appliace = await prisma.appliances.create({
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

    const folder = `appliances/${appliace.id}_${cleanApplianceName}`;
    const fileList: File[] | any = formData.getAll('file');

    fileList.forEach(async (file: File) => {
      const fileName = await uploadFile(file, folder);

      await prisma.applianceImages.create({
        data: {
          imageUrl: fileName,
          applianceId: appliace.id,
        },
      });
    });

    return NextResponse.json({ message: 'Success', status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage);
  }
}

export const dynamic = 'force-dynamic';
