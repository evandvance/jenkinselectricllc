export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};

export function middleware() {
  console.log('Admin pannel Accessed');
}
