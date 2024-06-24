import { NextRequest, NextResponse } from 'next/server';
import { applianceUploadFormSchema } from '@/interfaces/ApplianceUploadFormSchema';
import { ApplianceAges, ApplianceTypes } from '@prisma/client';
// import { deleteFile, cleanseName } from '@/helper/AWSFileHandler';
import prisma from '@/helper/PrismaWrapper';

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    // const appliance = await prisma.appliances.findUnique({ where: { id } });

    // if (!appliance) {
    //   NextResponse.json({ status: 404, message: 'Appliance not found' });
    // }

    // await deleteFile(`appliances/${cleanseName(appliance!.applianceName)}/`);

    await prisma.appliances.delete({ where: { id } });
    return NextResponse.json(
      { message: 'Deletion Successful', status: 204 },
      { status: 204 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage);
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const result = await prisma.reservations.delete({
      where: { applianceId: id },
    });

    return NextResponse.json(
      {
        message: 'Reservation Removed Successfully',
        status: 200,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 504 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const formData = await req.formData();

  const applianceName = formData.get('applianceName')?.toString()!;
  const appliancePrice = parseInt(formData.get('appliancePrice')?.toString()!);
  const applianceBrand = formData.get('applianceBrand')?.toString()!;
  const modelNumber = formData.get('modelNumber')?.toString()!;
  const description = formData.get('description')?.toString()!;
  const age = formData.get('age')! as ApplianceAges;
  const type = formData.get('type')! as ApplianceTypes;

  const validation = applianceUploadFormSchema.safeParse({
    applianceName,
    appliancePrice,
    modelNumber,
    applianceBrand,
    description,
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

  try {
    const appliance = await prisma.appliances.update({
      where: { id },
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

    return NextResponse.json(
      {
        message: 'Success',
        status: 200,
        data: appliance,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
