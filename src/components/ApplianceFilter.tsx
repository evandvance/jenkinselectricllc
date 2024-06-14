'use client';
import { applianceTypes } from './AdminComponents/ApplianceUploadForm/ApplianceUploadFormSchema';

interface ApplianceFilterInterface {
  age?: string;
  filter?: string;
}

const ApplianceFilter = ({ age, filter }: ApplianceFilterInterface) => {
  if (!age) return;
  return (
    <div className="w-[85vw] h-20 p-5 flex justify-end items-center rounded-xl bg-slate-300">
      <h2 className="text-xl mr-2">Filter:</h2>
      <select
        className="rounded w-24 p-1"
        name="filter"
        id="filter"
        defaultValue={filter}
      >
        <option
          onClick={() => (window.location.href = `/appliances?age=${age}`)}
          value=""
        >
          All
        </option>
        {applianceTypes.map((type) => (
          <option
            key={type}
            value={type}
            onClick={() =>
              (window.location.href = `/appliances?age=${age}&filter=${type}`)
            }
          >
            {/* TODO Make this not ugly for user*/}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ApplianceFilter;
