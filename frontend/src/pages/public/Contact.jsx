// src/pages/public/Contact.jsx

import { useState } from 'react'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a project in mind? We would love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="space-y-4 text-white/60">
              <p>📍 123 Business Street, City</p>
              <p>📧 hello@nexora.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>🕐 Mon-Fri: 9AM - 6PM</p>
            </div>
            <div className="mt-8 p-4 gradient-primary rounded-lg">
              <p className="text-white text-sm">
                💡 Let us help you build something amazing together.
              </p>
            </div>
          </Card>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Your Name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="w-full">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-laserBlue focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message →
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactPage