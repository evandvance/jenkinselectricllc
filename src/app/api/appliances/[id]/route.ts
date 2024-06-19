import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { ApplianceSelectConfig } from '@/configs/SelectConfigs';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const appliance = await prisma.appliances.findUnique({
      where: { id },
      select: ApplianceSelectConfig,
    });

    return NextResponse.json({
      message: 'Success',
      status: 200,
      data: appliance,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: 'An error has occured', status: 500 });
  }
}

export const dynamic = 'force-dynamic';
