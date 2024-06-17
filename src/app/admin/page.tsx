import { ReservedApplianceDisplay } from '@/components/AdminComponents';

const AdminPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1 className="text-5xl">Admin Dashboard</h1>
      <ReservedApplianceDisplay />
    </div>
  );
};

export default AdminPage;
