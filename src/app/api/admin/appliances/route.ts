import { NextRequest, NextResponse } from 'next/server';
import { applianceUploadFormSchema } from '@/components/AdminComponents/ApplianceUploadForm/ApplianceUploadFormSchema';
import PrismaWrapper from '@/helper/PrismaWrapper';
import { cleanseName, uploadFile } from '@/helper/AWSUploadFile';

const prisma = PrismaWrapper;

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const applianceName = formData.get('applianceName')?.toString()!;
  const appliancePrice = parseInt(formData.get('appliancePrice')?.toString()!);
  const modelNumber = formData.get('modelNumber')?.toString()!;
  const imageFile = formData.get('file');

  const validation = applianceUploadFormSchema.safeParse({
    applianceName,
    appliancePrice,
    modelNumber,
    imageFile,
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
      data: { applianceName, price: appliancePrice, modelNumber },
    });
    const folder = `appliances/${cleanApplianceName}`;
    const fileList: File[] | any = formData.getAll('file');

    fileList.forEach(async (file: File) => {
      await uploadFile(file, folder);

      await prisma.applianceImages.create({
        data: {
          imageUrl: `mediacdn.jenkinselectric.llc/images/${folder}/${file.name}`,
          applianceId: appliace.id,
        },
      });
    });

    return NextResponse.json({ message: 'Success' });
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage);
  }
}

export async function DELETE(req: NextRequest) {
  const formData = await req.formData();

  const id = parseInt(formData.get('applianceId')?.toString()!);

  try {
    await prisma.appliances.delete({ where: { id } });

    return NextResponse.json({ status: 204 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage);
  }
}
