'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTechnicians() {
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

  return technicians;
}
