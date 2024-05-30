import TechnicianCard from '@/components/Cards/TechnicianCard';
import { getTechnicians } from '@/services/TechnicianServices';

const TechnicianPage = async () => {
  const technicians = await getTechnicians();

  return (
    <div className="flex flex-col justify-center items-center">
      {technicians.map((technician, index) => {
        const { firstName, lastName, bio, isCertified, imageUrl } = technician;
        return (
          <TechnicianCard
            firstName={firstName}
            lastName={lastName}
            bio={bio}
            isCertified={isCertified}
            imageUrl={imageUrl}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default TechnicianPage;
