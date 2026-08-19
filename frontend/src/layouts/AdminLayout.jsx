// src/layouts/AdminLayout.jsx

import { Outlet, NavLink } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-inkBlack flex">
      {/* Sidebar */}
      <aside className="w-64 bg-inkBlack/80 border-r border-white/5 p-6 fixed left-0 top-0 bottom-0">
        <div className="mb-8">
          <h2 className="text-2xl font-bold gradient-text">Nexora</h2>
          <p className="text-white/40 text-sm">Admin Panel</p>
        </div>
        <nav className="space-y-2">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'gradient-primary text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'gradient-primary text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        <header className="bg-inkBlack/80 border-b border-white/5 p-6">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout