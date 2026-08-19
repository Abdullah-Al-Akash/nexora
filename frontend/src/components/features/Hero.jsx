// src/components/features/Hero.jsx

import './Hero.css'
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className="hero-section">
      
      {/* ===== WATERMARK TEXTS - SLIDING ===== */}
      <div className="watermark-container">
        {/* Left to Right */}
        <div className="watermark-text watermark-text-1">Web Development</div>
        <div className="watermark-text watermark-text-2">Digital Marketing</div>
        <div className="watermark-text watermark-text-3">Graphic Design</div>
        <div className="watermark-text watermark-text-4">SEO Strategy</div>
        <div className="watermark-text watermark-text-5">Brand Identity</div>
        <div className="watermark-text watermark-text-6">UI/UX Design</div>
        <div className="watermark-text watermark-text-7">Mobile Apps</div>
        
        {/* Right to Left */}
        <div className="watermark-text watermark-text-8">Content Writing</div>
        <div className="watermark-text watermark-text-9">Video Editing</div>
        <div className="watermark-text watermark-text-10">Social Media</div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-greenNeon/20 to-cyan/20 border border-greenNeon/30 text-sm font-medium text-white"
            >
              🚀 Trusted by 200+ businesses
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">We Build</span>
              <br />
              <span className="gradient-text">
                <ReactTyped
                  strings={[
                    'Digital Experiences',
                    'High-Converting Websites',
                    'Brand Identities',
                    'SEO Strategies',
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  backDelay={2000}
                  loop
                  showCursor={true}
                  cursorChar="|"
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-lg">
              We help businesses grow online with stunning web design, 
              data-driven SEO, and creative branding — all tailored to your goals.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" className="px-8 py-3.5 text-base">
                Get Started →
              </Button>
              <Button variant="outline" className="px-8 py-3.5 text-base border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <span className="text-greenNeon">★★★★★</span>
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">200+</span>
                <span>Projects Delivered</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-greenNeon/30 to-cyan/30 blur-2xl rounded-2xl" />
              
              <div className="relative  rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="https://i.pinimg.com/originals/00/6b/27/006b2787627b0b67bb91d9716d6e5058.gif"
                  alt="Nexora Hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-cyan/20" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-3 flex items-center gap-3 border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-greenNeon to-cyan flex items-center justify-center text-white font-bold text-sm">
                  🏆
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Top Agency</p>
                  <p className="text-xs text-white/50">2026 Award Winner</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Hero