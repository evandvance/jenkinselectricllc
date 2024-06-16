import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const appliance = await prisma.appliances.findUnique({
      where: { id },
      select: {
        id: true,
        applianceName: true,
        price: true,
        brand: true,
        description: true,
        modelNumber: true,
        isReserved: true,
        images: true,
        age: true,
        type: true,
      },
    });

    return NextResponse.json(appliance);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'An error has occured', status: 500 });
  }
}

export const dynamic = 'force-dynamic';
