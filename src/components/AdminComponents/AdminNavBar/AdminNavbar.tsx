import Link from 'next/link';

const AdminNavbar = () => {
  return (
    <nav className="w-screen text-white text-xl bg-black flex justify-between">
      <div className="m-5">
        <Link className="border rounded-xl p-3" href={'/admin'}>
          Admin Dashboard
        </Link>
      </div>
      <ul className=" m-5 flex space-x-4">
        <li>
          <Link className="border rounded-xl p-3" href={'/admin/appliances'}>
            Appliances
          </Link>
        </li>

        <li>
          <Link className="border rounded-xl p-3" href={'/admin/technicians'}>
            Technicians
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
