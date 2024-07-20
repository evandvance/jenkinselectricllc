import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/helper/PrismaWrapper';

export async function GET(req: NextRequest) {
  try {
    const instructions = await prisma.permitInstructions.findMany();

    const url = await prisma.permitVideo.findMany();

    return NextResponse.json({
      status: 200,
      message: 'Success',
      data: { instructions: instructions, url: url[0] },
    });
  } catch (err) {
    return NextResponse.json(
      { status: 500, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
