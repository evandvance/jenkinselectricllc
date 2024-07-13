import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/helper/PrismaWrapper';

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    await prisma.permitInstructions.delete({ where: { id } });
    return NextResponse.json({ message: 'Deletion Successful', status: 204 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(errorMessage, { status: 500 });
  }
}
export const dynamic = 'force-dynamic';
