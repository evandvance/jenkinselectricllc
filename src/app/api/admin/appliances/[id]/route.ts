import { NextRequest, NextResponse } from 'next/server';
// import { deleteFile, cleanseName } from '@/helper/AWSFileHandler';
import prisma from '@/helper/PrismaWrapper';

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
    return NextResponse.json({ status: 204 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'An error has occured', status: 500 });
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

    return NextResponse.json({ status: 204 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'An error has occured', status: 500 });
  }
}

export const dynamic = 'force-dynamic';
