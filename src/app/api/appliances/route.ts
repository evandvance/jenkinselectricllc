import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';

export async function GET(req: NextRequest) {
  const appliances = await prisma.appliances.findMany({
    select: {
      id: true,
      applianceName: true,
      price: true,
      modelNumber: true,
      isReserved: true,
      images: true,
      age: true,
      type: true,
    },
  });

  return NextResponse.json(appliances);
}

export const dynamic = 'force-dynamic';
