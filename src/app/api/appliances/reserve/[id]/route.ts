import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { reserveFormSchema } from '@/interfaces/ReserveFormSchema';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const formData = await req.formData();

  const email = formData.get('email')?.toString()!;
  const comments = formData.get('comments')?.toString()!;

  const validation = reserveFormSchema.safeParse({
    email,
    comments,
  });

  if (validation.error) {
    return NextResponse.json({
      message: 'Invalid Input',
      status: 400,
      error: validation.error,
    });
  }

  try {
    const applianceExists = await prisma.appliances.count({ where: { id } });

    if (!applianceExists)
      return NextResponse.json({ message: 'Appliance Not found', status: 404 });

    const applianceIsReserved = await prisma.reservations.count({
      where: { email },
    });

    if (applianceIsReserved)
      return NextResponse.json({
        message:
          'You have already reserved an appliance. Please contact us to unreserve it or to reserve multiple',
        status: 400,
      });

    const reservation = await prisma.reservations.create({
      data: {
        applianceId: id,
        email,
        comments,
      },
    });

    return NextResponse.json({
      message: 'Reservation Successfully Created',
      data: reservation,
      status: 200,
    });
  } catch (err: any) {
    if (err.code === 'P2002') {
      return NextResponse.json({
        message: 'A reservation already exists on this appliance',
        status: 400,
      });
    }

    console.log(err);
    return NextResponse.json({ message: 'An error has occured', status: 500 });
  }
}

export const dynamic = 'force-dynamic';
