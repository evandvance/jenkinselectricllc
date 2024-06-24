import { NextRequest, NextResponse } from 'next/server';
import PrismaWrapper from '@/helper/PrismaWrapper';

const prisma = PrismaWrapper;

export async function GET(req: NextRequest) {
  try {
    const technicians = await prisma.technicians.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        bio: true,
        isCertified: true,
        imageUrl: true,
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: 'Success',
        data: technicians,
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
