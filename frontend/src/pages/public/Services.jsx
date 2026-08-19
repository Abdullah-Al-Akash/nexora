// src/pages/public/Services.jsx

import { motion } from 'framer-motion'
import Card from '../../components/ui/Card'

const servicesList = [
  {
    title: 'Web Development',
    description: 'Full-stack web development using modern technologies like React, Node.js, and more.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design approach to create intuitive and engaging interfaces.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online visibility and engagement.',
    icon: '📈',
  },
  {
    title: 'Brand Strategy',
    description: 'Comprehensive brand development to establish a strong market presence.',
    icon: '🚀',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'Consulting',
    description: 'Expert advice and guidance for your digital transformation journey.',
    icon: '💡',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const ServicesPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to meet all your digital needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="text-center hover:shadow-[0_0_40px_rgba(5,238,42,0.08)]">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesPage