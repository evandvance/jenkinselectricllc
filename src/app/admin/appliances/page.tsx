import { ApplianceUploadForm } from '@/components/AdminComponents';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-4">
      <h2 className="text-2xl">Upload An Appliance</h2>
      <ApplianceUploadForm />
    </div>
  );
};

export default page;
