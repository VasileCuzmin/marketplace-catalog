import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';

const MODULES = [
  {
    id: 'module1',
    label: 'Module 1',
    title: 'Type-Safe API Contracts',
    path: '/module1/products',
    available: true,
  },
  {
    id: 'module2',
    label: 'Module 2',
    title: 'Fetch Request Lifecycle',
    path: '/module2/products',
    available: true,
  },
  {
    id: 'module3',
    label: 'Module 3',
    title: 'Runtime Validation',
    path: '/module3',
    available: false,
  },
  {
    id: 'module4',
    label: 'Module 4',
    title: 'Pagination & Caching',
    path: '/module4',
    available: false,
  },
  {
    id: 'module5',
    label: 'Module 5',
    title: 'Security & Auth',
    path: '/module5',
    available: false,
  },
];

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path
        d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeModuleId = location.pathname.split('/')[1] || 'module1';
  const activeModule = MODULES.find((m) => m.id === activeModuleId) ?? MODULES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Wordmark */}
          <NavLink to="/" className="flex items-center gap-2.5">
            <LeafIcon className="w-5 h-5 text-ps-ada-green" />
            <div>
              <span className="font-semibold text-ps-inky-blue text-lg tracking-wide leading-none block">
                Verdant
              </span>
              <span className="text-[10px] text-ps-purple-gray tracking-widest uppercase leading-none">
                Bring Nature Home
              </span>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm font-medium">
            {/* Products link — scoped to the active module */}
            <NavLink
              to={`/${activeModuleId}/products`}
              className={({ isActive }) =>
                isActive
                  ? 'text-ps-inky-blue border-b-2 border-ps-inky-blue pb-0.5'
                  : 'text-ps-inky-blue/50 hover:text-ps-inky-blue transition-colors'
              }
            >
              Products
            </NavLink>

            {/* Module dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 text-ps-inky-blue/50 hover:text-ps-inky-blue transition-colors"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                {activeModule.label}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                  {MODULES.map((module) => {
                    const isActive = module.id === activeModuleId;
                    return (
                      <button
                        key={module.id}
                        disabled={!module.available}
                        onClick={() => {
                          if (module.available) {
                            navigate(module.path);
                            setDropdownOpen(false);
                          }
                        }}
                        className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                          !module.available
                            ? 'cursor-not-allowed opacity-50'
                            : isActive
                              ? 'bg-ps-surface'
                              : 'hover:bg-gray-50'
                        }`}
                      >
                        <span
                          className={`text-xs mt-0.5 ${isActive ? 'text-ps-ada-green' : 'text-transparent'}`}
                        >
                          ✦
                        </span>
                        <div>
                          <p
                            className={`text-sm font-semibold ${isActive ? 'text-ps-inky-blue' : 'text-ps-inky-blue'}`}
                          >
                            {module.label}
                          </p>
                          <p className="text-xs text-gray-500">{module.title}</p>
                          {!module.available && (
                            <p className="text-xs text-gray-400 italic mt-0.5">Coming soon</p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
