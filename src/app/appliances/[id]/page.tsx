'use client';
import AppliancePageDisplay from '@/components/Displays/AppliancePageDisplay';

interface ApplianceProps {
  params: { id: string };
}

const page = ({ params: { id } }: ApplianceProps) => {
  const applianceId = parseInt(id);

  return <AppliancePageDisplay id={applianceId} />;
};

export default page;
