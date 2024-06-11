import TechnicianCard from '@/components/Cards/TechnicianCard';
import { getTechnicians } from './actions';
const TechnicianPage = async () => {
  const technicians = await getTechnicians();

  if (technicians?.length === 0) {
    return (
      <div className="m-5 flex justify-center items-center">
        No Technicians Found
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {technicians?.map((technician, index) => {
        const { firstName, lastName, bio, isCertified, imageUrl } = technician;
        return (
          <TechnicianCard
            firstName={firstName}
            lastName={lastName}
            bio={bio}
            isCertified={isCertified}
            imageUrl={imageUrl}
            index={index}
            key={firstName + lastName}
          />
        );
      })}
    </div>
  );
};

export default TechnicianPage;
