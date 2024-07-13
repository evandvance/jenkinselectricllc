import PermitCardDisplay from '@/components/Displays/PermitCardDisplay';

const PermitPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl m-5">How to Pull A Permit</h1>
      <PermitCardDisplay />
    </div>
  );
};

export default PermitPage;
