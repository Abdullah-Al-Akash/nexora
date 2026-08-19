// src/components/features/Portfolio.jsx

import Card from '../ui/Card'
import Button from '../ui/Button'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    gradient: 'gradient-primary',
  },
  {
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    gradient: 'gradient-accent',
  },
  {
    title: 'Brand Identity',
    category: 'Digital Marketing',
    gradient: 'gradient-hero',
  },
]

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-inkBlack/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Check out some of our recent projects that made an impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} gradient className="h-64 flex items-end hover:scale-105">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio