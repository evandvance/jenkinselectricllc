import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  const formData = await req.formData();

  const url = formData.get('url')?.toString()!;

  //https://www.youtube.com/watch?v=7lSVdZ2hESc

  //https://www.youtube.com/embed/7lSVdZ2hESc
}

export const dynamic = 'force-dynamic';
