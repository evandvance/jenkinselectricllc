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
    const reservation = await prisma.reservations.create({
      data: {
        applianceId: id,
        email,
        comments,
      },
    });

    return NextResponse.json({ ...reservation, status: 200 });
  } catch (err: any) {
    console.log(err);

    if (err.code === 'P2002') {
      return NextResponse.json({
        message:
          'A reservation already exists on this appliance or you have already reserved an appliance contact us to reserve multiple',
        status: 400,
      });
    }

    return NextResponse.json({ message: 'An error has occured', status: 500 });
  }
}

export const dynamic = 'force-dynamic';
