import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';

export async function GET(req: NextRequest) {
  try {
    const reservedAppliances = await prisma.reservations.findMany();

    return NextResponse.json({
      message: 'Success',
      status: 200,
      data: reservedAppliances,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: 'An internal error has occured',
      status: 500,
    });
  }
}

export const dynamic = 'force-dynamic';
