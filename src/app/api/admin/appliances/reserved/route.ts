import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';

export async function GET(req: NextRequest) {
  try {
    const reservedAppliances = await prisma.reservations.findMany({
      select: {
        id: true,
        email: true,
        comments: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        street: true,
        city: true,
        state: true,
        zip: true,
        applianceId: true,
        reservedAt: true,
        appliance: true,
      },
    });

    return NextResponse.json(
      {
        message: 'Success',
        status: 200,
        data: reservedAppliances,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: 'An internal error has occured',
        status: 500,
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
