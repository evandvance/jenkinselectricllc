import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { ApplianceTypes } from '@prisma/client';
import { isApplianceType } from '@/interfaces/ApplianceInterface';
import { ApplianceSelectConfig } from '@/configs/SelectConfigs';

export async function GET(req: NextRequest) {
  const applianceType = new URL(req.url).searchParams.get(
    'type'
  ) as ApplianceTypes;

  if (applianceType) {
    return NextResponse.json({
      message: 'Success',
      status: 200,
      data: await getByType(applianceType),
    });
  }

  const appliances = await prisma.appliances.findMany({
    select: ApplianceSelectConfig,
  });

  return NextResponse.json({
    message: 'Success',
    status: 200,
    data: appliances,
  });
}

async function getByType(applianceType: ApplianceTypes) {
  if (!isApplianceType(applianceType) || applianceType === null) {
    return [];
  }

  const appliances = await prisma.appliances.findMany({
    where: { type: applianceType },
    select: ApplianceSelectConfig,
  });

  return appliances;
}

export const dynamic = 'force-dynamic';
