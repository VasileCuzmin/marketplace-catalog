import { NavLink } from 'react-router';

export default function CatalogNav() {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-gray-100 rounded-full p-1">
        <NavLink
          to="1/products"
          end
          className={({ isActive }) =>
            `px-5 py-1.5 text-sm font-medium rounded-full transition-colors ${isActive
              ? 'bg-ps-inky-blue text-white shadow-sm'
              : 'text-ps-inky-blue/60 hover:text-ps-inky-blue'
            }`
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) =>
            `px-5 py-1.5 text-sm font-medium rounded-full transition-colors ${isActive
              ? 'bg-ps-inky-blue text-white shadow-sm'
              : 'text-ps-inky-blue/60 hover:text-ps-inky-blue'
            }`
          }
        >
          Discover
        </NavLink>
      </div>
    </div>
  );
}
