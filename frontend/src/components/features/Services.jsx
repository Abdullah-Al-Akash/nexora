// src/components/features/Services.jsx

import Card from '../ui/Card'

const services = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive websites with cutting-edge technology.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that delight users.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence.',
    icon: '📈',
  },
]

const Services = () => {
  return (
    <section className="py-20 px-4 bg-inkBlack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We deliver exceptional solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:scale-105">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services