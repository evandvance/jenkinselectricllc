'use client';
import { useState, useEffect } from 'react';
import {
  ApplianceUploadForm,
  ApplianceListingDisplay,
} from '@/components/AdminComponents';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';

const AdminAppliancePageDisplay = () => {
  const [appliances, setAppliances] = useState<appliaceInterface[]>([]);

  useEffect(() => {
    fetch('/api/appliances', { cache: 'no-cache' }).then(async (data) => {
      const result = (await data.json()) as ApiResponse<appliaceInterface[]>;
      const applianceResult = result.data;

      if (!applianceResult) return;
      setAppliances(applianceResult!);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-4">
      <h2 className="text-5xl">Upload An Appliance</h2>
      <ApplianceUploadForm
        setAppliances={setAppliances}
        allAppliances={appliances}
      />
      <div className="flex flex-col justify-center items-center p-5 space-y-3">
        <h1 className="text-5xl"> Appliances Listed</h1>
        <h2 className="tex-3xl text-red-500">
          WARNING! There is no confirm for deletions yet
        </h2>
        <ApplianceListingDisplay
          appliances={appliances}
          setAppliances={setAppliances}
        />
      </div>
    </div>
  );
};

export default AdminAppliancePageDisplay;
