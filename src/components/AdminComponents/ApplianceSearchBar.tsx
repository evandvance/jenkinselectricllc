'use client';
import { appliaceInterface } from '@/interfaces/ApplianceInterface';
import { ApplianceTypes } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

interface ApplianceSearchBarProps {
  isGenerator?: boolean;
  originalAppliances: appliaceInterface[];
  setAppliances: Dispatch<SetStateAction<appliaceInterface[]>>;
}

const ApplianceSearchBar = ({
  originalAppliances,
  setAppliances,
  isGenerator,
}: ApplianceSearchBarProps) => {
  const applianceTypes = Object.keys(ApplianceTypes);

  const handleFilterChange = (filter: ApplianceTypes | '') => {
    if (filter === '') {
      return setAppliances(originalAppliances);
    }

    setAppliances(
      originalAppliances.filter((appliance) => appliance.type === filter)
    );
  };

  return (
    <div className="w-[85vw] h-20 p-5 flex justify-between items-center rounded-xl bg-slate-300">
      <input
        className="p-1 rounded hover:cursor-text"
        type="text"
        placeholder="Search By Name..."
        onChange={(event) => {
          setAppliances(
            originalAppliances.filter((appliance) =>
              appliance.applianceName.includes(event.target.value)
            )
          );
        }}
      />
      {!isGenerator && (
        <div className="flex">
          <h2 className="hidden lg:static text-xl mr-2">Filter:</h2>
          <select
            className="rounded w-24 lg:w-auto p-1"
            name="filter"
            id="filter"
            onChange={(event) =>
              handleFilterChange(event.target.value as ApplianceTypes | '')
            }
          >
            <option value="">All</option>
            {applianceTypes.map((type) => (
              <option key={type} value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ApplianceSearchBar;
