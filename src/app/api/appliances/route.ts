import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { ApplianceTypes } from '@prisma/client';
import { isApplianceType } from '@/interfaces/ApplianceInterface';
import { ApplianceSelectConfig } from '@/configs/SelectConfigs';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const page = url.searchParams.get('page')
    ? parseInt(url.searchParams.get('page')!)
    : 0;

  const pageSize = url.searchParams.get('size')
    ? parseInt(url.searchParams.get('size')!)
    : 25;

  const applianceType = url.searchParams.get('type') as ApplianceTypes;

  const skip = page > 1 ? page * pageSize - pageSize : 0;
  const take = pageSize;

  if (applianceType) {
    return NextResponse.json(
      {
        message: 'Success',
        status: 200,
        data: await getByType(applianceType, take, skip),
      },
      { status: 200 }
    );
  }

  const appliances = await prisma.appliances.findMany({
    select: ApplianceSelectConfig,
  });

  return NextResponse.json(
    {
      message: 'Success',
      status: 200,
      data: appliances,
    },
    { status: 200 }
  );
}

async function getByType(
  applianceType: ApplianceTypes,
  take: number,
  skip: number
) {
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
