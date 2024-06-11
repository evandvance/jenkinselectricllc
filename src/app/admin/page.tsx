import ComingSoonCard from '@/components/Cards/ComingSoonCard';
import { authConfig } from '@/configs/authConfigs';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const AdminPage = async () => {
  const session = await getServerSession(authConfig);

  if (!session?.user) {
    redirect('/api/auth/signin');
  }

  return (
    <div>
      <ComingSoonCard />
    </div>
  );
};

export default AdminPage;
