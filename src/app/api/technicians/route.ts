import { NextRequest, NextResponse } from 'next/server';
import { getTechnicians } from '@/services/TechnicianServices';

export async function GET() {
  try {
    const technicians = await getTechnicians();

    return NextResponse.json(technicians);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: 'An error has occured' },
      { status: 500 }
    );
  }
}
