// import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     const technicians = await prisma.technician.findMany({
//       select: {
//         id: true,
//         firstName: true,
//         lastName: true,
//         bio: true,
//         isCertified: true,
//         imageUrl: true,
//         phoneNumber: true,
//       },
//     });

//     return NextResponse.json(technicians);
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       { message: 'An error has occured' },
//       { status: 500 }
//     );
//   }
// }
