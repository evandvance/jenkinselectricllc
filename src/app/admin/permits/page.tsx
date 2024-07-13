import AdminPermitPageDisplay from '@/components/AdminComponents/AdminPermitPageDisplay';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl lg:text-5xl m-5">Pulling Permit Instructions</h1>
      <AdminPermitPageDisplay />
    </div>
  );
};

export default page;
