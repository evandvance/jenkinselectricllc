import TechnicianCard from '@/components/Cards/TechnicianCard';
import { getTechnicians } from '@/services/TechnicianServices';

const TechnicianPage = async () => {
  const technicians = await getTechnicians();

  return (
    <div className="flex flex-col justify-center items-center">
      {technicians.map((technician, index) => {
        return (
          <TechnicianCard
            firstName={technician.firstName}
            lastname={technician.lastName}
            bio={technician.bio}
            isCertified={technician.isCertified}
            imageUrl={technician.imageUrl}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default TechnicianPage;
