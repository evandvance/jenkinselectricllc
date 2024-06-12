export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/admin/:path*'],
};

// export function middleware() {
//   console.log('Admin pannel Accessed');
// }
