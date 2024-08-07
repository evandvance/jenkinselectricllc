import Link from 'next/link';

const AdminNavbar = () => {
  return (
    <nav className="w-screen text-white text-xl bg-black flex flex-col lg:flex-row lg:justify-between">
      <div className="mx-5 lg:my-5">
        <Link
          className="border rounded-xl py-2 px-3 hover:bg-white hover:text-black"
          href={'/admin'}
        >
          Admin Dashboard
        </Link>
      </div>
      <ul className=" m-5 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-4 space-y-5">
        <li>
          <Link
            className="border rounded-xl py-2 px-3 hover:bg-white hover:text-black"
            href={'/admin/appliances'}
          >
            Appliances
          </Link>
        </li>
        <li>
          <Link
            className="border rounded-xl py-2 px-3 hover:bg-white hover:text-black"
            href={'/admin/generators'}
          >
            Generators
          </Link>
        </li>

        <li>
          <Link
            className="border rounded-xl py-2 px-3 hover:bg-white hover:text-black"
            href={'/admin/technicians'}
          >
            Technicians
          </Link>
        </li>

        <li>
          <Link
            className="border rounded-xl py-2 px-3 hover:bg-white hover:text-black"
            href={'/admin/permits'}
          >
            Permit Instructions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
