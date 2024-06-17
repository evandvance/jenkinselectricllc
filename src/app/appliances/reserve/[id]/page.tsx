import ReserveCard from '@/components/Cards/ReserveCard';

interface ReservePageProps {
  params: { id: string };
}

const ReserveAppliancePage = ({ params: { id } }: ReservePageProps) => {
  const applianceId = parseInt(id);
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-5xl text-center">Reserve an Appliance Now!</h1>
      <ReserveCard id={applianceId} />
    </div>
  );
};

export default ReserveAppliancePage;
