// src/pages/public/Portfolio.jsx

import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online store with payment integration.',
    gradient: 'gradient-primary',
  },
  {
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    description: 'Modern and intuitive mobile application interface.',
    gradient: 'gradient-accent',
  },
  {
    title: 'Brand Identity',
    category: 'Digital Marketing',
    description: 'Complete brand identity design and strategy.',
    gradient: 'gradient-hero',
  },
  {
    title: 'Dashboard Analytics',
    category: 'Web Development',
    description: 'Real-time data visualization and analytics dashboard.',
    gradient: 'gradient-primary',
  },
  {
    title: 'Landing Page Design',
    category: 'UI/UX Design',
    description: 'High-converting landing page for product launch.',
    gradient: 'gradient-accent',
  },
  {
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive social media marketing strategy.',
    gradient: 'gradient-hero',
  },
]

const PortfolioPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore our latest work and see how we bring ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} gradient className="hover:scale-105">
              <div className="h-48 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.category}</p>
                <p className="text-white/50 text-sm mt-2">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage