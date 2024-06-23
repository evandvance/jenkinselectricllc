'use client';
import { useState, useEffect } from 'react';
import { Technicians } from '@prisma/client';
import EditTechnicianDisply from '@/components/AdminComponents/EditTechnicianDisply';
import TechnicianUploadForm from '@/components/AdminComponents/TechnicianUploadForm';

const page = () => {
  const [technicians, setTechnicians] = useState<Technicians[]>();

  useEffect(() => {
    fetch('/api/technicians').then(async (data) => {
      const result = (await data.json()) as ApiResponse<Technicians[]>;

      const technicianResponse = result.data;
      if (!technicianResponse) return;

      setTechnicians(technicianResponse!);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl m-5">Technicians</h1>
      <TechnicianUploadForm
        technicians={technicians}
        setTechnicians={setTechnicians}
      />
      <EditTechnicianDisply
        technicians={technicians}
        setTechnicians={setTechnicians}
      />
    </div>
  );
};

export default page;
