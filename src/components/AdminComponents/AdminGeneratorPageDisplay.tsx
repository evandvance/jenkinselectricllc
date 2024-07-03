'use client';
import { useState, useEffect } from 'react';
import {
  ApplianceUploadForm,
  ApplianceListingDisplay,
} from '@/components/AdminComponents';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import ApplianceSearchBar from './ApplianceSearchBar';

const AdminAppliancePageDisplay = () => {
  const [appliances, setAppliances] = useState<appliaceInterface[]>([]);
  const [originalAppliances, setOriginalAppliances] = useState<
    appliaceInterface[]
  >([]);

  useEffect(() => {
    fetch('/api/appliances', { cache: 'no-cache' }).then(async (data) => {
      const result = (await data.json()) as ApiResponse<appliaceInterface[]>;
      let applianceResult = result.data;

      if (!applianceResult) return;

      applianceResult = applianceResult.filter(
        (appliance) => appliance.type === 'generator'
      );
      setAppliances(applianceResult);
      setOriginalAppliances(applianceResult);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-4">
      <h2 className="text-5xl">Upload a Generator</h2>
      <ApplianceUploadForm
        setAppliances={setAppliances}
        allAppliances={appliances}
        isGenerator
      />
      <div className="flex flex-col justify-center items-center p-5 space-y-3">
        <h1 className="text-5xl"> Generators Listed</h1>
        <h2 className="tex-3xl text-red-500">
          WARNING! There is no confirm for deletions yet
        </h2>
        <ApplianceSearchBar
          setAppliances={setAppliances}
          originalAppliances={originalAppliances}
          isGenerator
        />
        <ApplianceListingDisplay
          appliances={appliances}
          originalAppliances={originalAppliances}
          setOriginalAppliances={setOriginalAppliances}
          setAppliances={setAppliances}
          isGenerator
        />
      </div>
    </div>
  );
};

export default AdminAppliancePageDisplay;
