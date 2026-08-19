// src/layouts/PublicLayout.jsx

import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      {/* Footer will be added later */}
    </div>
  )
}

export default PublicLayout