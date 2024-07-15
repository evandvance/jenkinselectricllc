import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';
import { VideoSchema } from '@/interfaces/VideoInterface';

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const url = formData.get('url')?.toString()!;

  const validation = VideoSchema.safeParse({ url });

  if (validation.error) {
    console.log(validation.error);
    return NextResponse.json(
      {
        message: 'Invalid Input',
        status: 400,
        error: validation.error,
      },
      { status: 400 }
    );
  }

  const cleansedUrl = `https://www.youtube.com/embed/${url.split('=')[1]}`;

  try {
    const newVideo = await prisma.permitVideo.create({
      data: { url: cleansedUrl },
    });

    return NextResponse.json(
      {
        message: 'Success',
        status: 200,
        data: newVideo,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const formData = await req.formData();

  const url = formData.get('url')?.toString()!;

  const validation = VideoSchema.safeParse({ url });

  if (validation.error) {
    console.log(validation.error);
    return NextResponse.json(
      {
        message: 'Invalid Input',
        status: 400,
        error: validation.error,
      },
      { status: 400 }
    );
  }

  const cleansedUrl = `https://www.youtube.com/embed/${url.split('=')[1]}`;

  try {
    const newVideo = await prisma.permitVideo.update({
      where: { id: 1 },
      data: { url: cleansedUrl },
    });

    return NextResponse.json(
      {
        message: 'Success',
        status: 201,
        data: newVideo,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
