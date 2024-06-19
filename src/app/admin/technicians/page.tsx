import EditTechnicianDisply from '@/components/AdminComponents/EditTechnicianDisply';
import TechnicianUploadForm from '@/components/AdminComponents/TechnicianUploadForm';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl m-5">Technicians</h1>
      <TechnicianUploadForm />
      <EditTechnicianDisply />
    </div>
  );
};

export default page;
