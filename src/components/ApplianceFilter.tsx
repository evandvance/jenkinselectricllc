'use client';
import { ApplianceAges, ApplianceTypes } from '@prisma/client';

interface ApplianceFilterInterface {
  age?: ApplianceAges;
  filter?: ApplianceTypes;
}

const ApplianceFilter = ({ age, filter }: ApplianceFilterInterface) => {
  let applianceTypes = Object.keys(ApplianceTypes);

  applianceTypes = applianceTypes.filter((type) => type !== 'generator');

  return (
    <div className="w-[85vw] h-20 p-5 flex justify-between items-center rounded-xl bg-slate-300">
      <div className="flex">
        <button
          onClick={() =>
            (window.location.href = `/appliances?age=New${
              filter ? `&filter=${filter}` : ''
            }`)
          }
          className={`m-1 py-1 text-xl px-3 hover:cursur-pointer hover:bg-jellcblue border rounded-xl ${
            age === 'New' ? 'bg-jellcblue text-white' : 'bg-white'
          }`}
        >
          New
        </button>
        <button
          onClick={() =>
            (window.location.href = `/appliances?age=Used${
              filter ? `&filter=${filter}` : ''
            }`)
          }
          className={`m-1 py-1 px-3 text-xl hover:cursur-pointer hover:bg-jellcblue border rounded-xl ${
            age === 'Used' ? 'bg-jellcblue text-white' : 'bg-white'
          }`}
        >
          Used
        </button>
      </div>
      <div className="flex">
        <h2 className="hidden text-xl mr-2 lg:block">Filter:</h2>
        <select
          className="rounded w-24 lg:w-auto p-1"
          name="filter"
          id="filter"
          defaultValue={filter}
          onChange={(event) => {
            if (event.target.value === '') {
              return (window.location.href = `/appliances?${
                age ? `age=${age}` : ''
              }`);
            }

            window.location.href = `/appliances?${
              age ? `age=${age}&` : ''
            }filter=${event.target.value}`;
          }}
        >
          <option value="">All</option>
          {applianceTypes.map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ApplianceFilter;
