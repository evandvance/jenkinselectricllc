import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
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
    const result = await prisma.appliances.update({
      where: { id },
      data: { isReserved: false },
    });

    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'An error has occured', status: 500 });
  }
}

export const dynamic = 'force-dynamic';
