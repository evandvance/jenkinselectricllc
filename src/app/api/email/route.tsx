import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ApplianceReserved from '@/emails/ApplianceReserved';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { data, error } = await resend.emails.send({
    from: 'noreply@mail.jenkinselectric.llc',
    to: ['evandvance@gmail.com'],
    subject: 'Hello world',
    react: <ApplianceReserved />,
  });

  if (error) {
    return NextResponse.json(
      { message: 'Failuer', status: 500, error },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: 'Success', status: 200, data },
    { status: 200 }
  );
}

export const dynamic = 'force-dynamic';
