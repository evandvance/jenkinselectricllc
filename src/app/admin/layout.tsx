import { ReactNode } from 'react';
import { AdminNavbar } from '@/components/AdminComponents';

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <AdminNavbar />
      <main>{children}</main>
    </>
  );
}
