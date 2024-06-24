import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { Resend } from 'resend';
import { reserveFormSchema } from '@/interfaces/ReserveFormSchema';
import ApplianceReserved from '@/emails/ApplianceReserved';
import EmployeeContact from '@/emails/EmployeeContact';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const id = parseInt(params.id);

  const formData = await req.formData();

  const email = formData.get('email')?.toString()!;
  const comments = formData.get('comments')?.toString()!;
  const firstName = formData.get('firstName')?.toString()!;
  const lastName = formData.get('lastName')?.toString()!;
  const phoneNumber = formData.get('phoneNumber')?.toString()!;
  const street = formData.get('street')?.toString()!;
  const city = formData.get('city')?.toString()!.toUpperCase()!;
  const state = formData.get('state')?.toString()!.toUpperCase()!;
  const zip = formData.get('zip')?.toString()!;

  const validation = reserveFormSchema.safeParse({
    email,
    comments,
    firstName,
    lastName,
    phoneNumber,
    street,
    city,
    state,
    zip,
  });

  if (validation.error || isNaN(parseInt(zip))) {
    return NextResponse.json(
      {
        message: 'Invalid Input',
        status: 400,
        error: validation.error,
      },
      { status: 400 }
    );
  }

  try {
    const appliance = await prisma.appliances.findFirst({ where: { id } });

    if (!appliance)
      return NextResponse.json(
        { message: 'Appliance Not found', status: 404 },
        { status: 404 }
      );

    const customerHasReservedAnAppliance = await prisma.reservations.count({
      where: { email },
    });

    if (customerHasReservedAnAppliance)
      return NextResponse.json(
        {
          message:
            'You have already reserved an appliance. Please contact us to unreserve it or to reserve multiple',
          status: 400,
        },
        { status: 400 }
      );

    const reservation = await prisma.reservations.create({
      data: {
        applianceId: id,
        email,
        comments,
        firstName,
        lastName,
        phoneNumber,
        street,
        city,
        state,
        zip: parseInt(zip),
      },
    });

    await resend.emails.send({
      from: 'noreply@mail.jenkinselectric.llc',
      to: [reservation.email],
      subject: `${appliance.applianceName} Reservation`,
      react: ApplianceReserved({ appliance, reservation }),
    });

    await resend.emails.send({
      from: 'noreply@mail.jenkinselectric.llc',
      to: [
        process.env.NODE_ENV === 'development'
          ? 'evandvance@gmail.com'
          : 'jenkinselectric96@gmail.com',
      ],
      subject: `${reservation.firstName} ${reservation.lastName} has reserved ${appliance.applianceName}`,
      react: EmployeeContact({ appliance, reservation }),
    });

    return NextResponse.json(
      {
        message: 'Reservation Successfully Created',
        data: reservation,
        status: 201,
      },
      { status: 201 }
    );
  } catch (err: any) {
    if (err.code === 'P2002') {
      return NextResponse.json(
        {
          message: 'A reservation already exists on this appliance',
          status: 400,
        },
        { status: 400 }
      );
    }

    console.log(err);
    return NextResponse.json(
      { message: 'An error has occured', status: 500 },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
