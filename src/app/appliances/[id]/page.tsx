'use client';
import Image from 'next/image';
import BlueButton from '@/components/Buttons/BlueButton';
import AppliancePageDisplay from '@/components/Displays/AppliancePageDisplay';

interface ApplianceProps {
  params: { id: string[] };
}

const page = ({ params: { id } }: ApplianceProps) => {
  const applianceId = parseInt(id[0]);

  return <AppliancePageDisplay id={applianceId} />;
};

export default page;
