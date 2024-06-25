import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/interfaces/ContactFormSchema';
import ContactFormEmployee from '@/emails/ContactFormEmployee';
import CustomerContact from '@/emails/CustomerContact';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await req.formData();

  const formSubmission = {
    name: formData.get('name')?.toString()!,
    email: formData.get('email')?.toString()!,
    phoneNumber: formData.get('phoneNumber')?.toString()!,
    comments: formData.get('comments')?.toString()!,
  };

  const validation = contactFormSchema.safeParse(formSubmission);

  if (validation.error) {
    return NextResponse.json(
      {
        message: 'Invalid Input',
        status: 400,
        error: validation.error,
      },
      { status: 400 }
    );
  }

  resend.emails.send({
    from: 'noreply@mail.jenkinselectric.llc',
    to: [formSubmission.email],
    subject: `You reached out to Jenkins Electric`,

    react: CustomerContact({ formData: formSubmission }),
  });

  resend.emails.send({
    from: 'noreply@mail.jenkinselectric.llc',
    to: [
      process.env.NODE_ENV === 'development'
        ? 'evandvance@gmail.com'
        : 'jenkinselectric96@gmail.com',
    ],
    subject: `${formSubmission.name} has reached out`,
    react: ContactFormEmployee({ formData: formSubmission }),
  });

  return NextResponse.json(
    {
      message: 'Contact Emails Sent',
      status: 201,
    },
    { status: 201 }
  );
}

export const dynamic = 'force-dynamic';
