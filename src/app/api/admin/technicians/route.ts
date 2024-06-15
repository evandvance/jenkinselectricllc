import { NextRequest, NextResponse } from 'next/server';
import PrismaWrapper from '@/helper/PrismaWrapper';
import { uploadFile } from '@/helper/AWSFileHandler';

const prisma = PrismaWrapper;

const errorMessage = { message: 'Error - something went wrong', status: 500 };

export async function POST(req: NextRequest) {}

export const dynamic = 'force-dynamic';
