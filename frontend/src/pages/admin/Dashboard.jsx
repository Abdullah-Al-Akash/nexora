// src/pages/admin/Dashboard.jsx

import Card from '../../components/ui/Card'

const Dashboard = () => {
  const stats = [
    { label: 'Total Projects', value: '24', gradient: 'gradient-primary' },
    { label: 'Active Clients', value: '18', gradient: 'gradient-accent' },
    { label: 'Blog Posts', value: '12', gradient: 'gradient-hero' },
    { label: 'Team Members', value: '8', gradient: 'gradient-primary' },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-6">Overview</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} gradient className="text-center">
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-white/70 text-sm mt-2">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Dashboard