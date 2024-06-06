import React from 'react';

interface ApplianceProps {
  params: { id: string[] };
}

const page = ({ params: { id } }: ApplianceProps) => {
  return <div>{id}</div>;
};

export default page;
