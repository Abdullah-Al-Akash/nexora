// src/pages/public/FAQ.jsx

import { useState } from 'react'
import Card from '../../components/ui/Card'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web development, UI/UX design, digital marketing, brand strategy, mobile development, and consulting services.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing varies depending on the project scope and requirements. Contact us for a customized quote.'
  },
  {
    question: 'How long does a project typically take?',
    answer: 'Project timelines depend on complexity. A typical website project takes 4-8 weeks, while larger projects may take 3-6 months.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide maintenance and support packages for all our projects to ensure your success.'
  },
  {
    question: 'Can you help with existing projects?',
    answer: 'Absolutely! We can take over existing projects and help optimize or complete them.'
  }
]

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:bg-white/10 transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <span className="text-2xl text-laserBlue">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-white/60 border-t border-white/10 pt-4">
                  {faq.answer}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQPage