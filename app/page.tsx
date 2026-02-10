'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <main className="bg-white">
      {/* Hero Section - Night Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-night.jpg"
          alt="DON Modular Homes at Night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.4)' }}
          >
            DON MODULAR HOMES
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl md:text-4xl text-white font-semibold mb-20"
            style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.9), 0 0 60px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Premium Modular Housing Solutions for the Irish Market
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8"
          >
            <div className="bg-primary/90 backdrop-blur-sm px-12 py-8 rounded-lg shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.6)' }}>€50,000</div>
              <div className="text-xl text-light">Retail Price</div>
            </div>
            
            <div className="bg-accent/90 backdrop-blur-sm px-12 py-8 rounded-lg shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.6)' }}>72 Units</div>
              <div className="text-xl text-light">Target / Year</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 text-light/80 text-sm"
          >
            B2B Partnership Opportunity | March 2026
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-4">The Product</h2>
          <p className="text-2xl text-primary mb-12">Premium-Quality Modular Homes</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/showroom-front.jpg"
              alt="DON Modular Home Exterior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { title: 'Modern Design', desc: 'Curved roof architecture with premium finishes' },
              { title: 'Turnkey Solution', desc: 'Complete bathroom, kitchen, heating & electrical' },
              { title: 'Quick Install', desc: '1-day installation after site preparation' },
              { title: 'Irish Standards', desc: 'Factory-built to meet all Irish regulations' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl border-l-4 border-accent hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Interior Quality */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-dark mb-4">
              Premium Interior Quality
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { src: '/images/bedroom-view.jpg', label: 'Spacious Bedroom' },
              { src: '/images/bathroom1.jpg', label: 'Modern Bathroom' },
              { src: '/images/living-area.jpg', label: 'Living Area' },
              { src: '/images/bedroom-deck.jpg', label: 'Natural Light' },
              { src: '/images/kitchen.jpg', label: 'Premium Kitchen' }
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white font-bold text-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Positioning */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-16">
            Product Positioning
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/exterior-entrance.jpg"
              alt="Product Display"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">✗ NOT</h3>
            <ul className="space-y-3 text-red-800">
              <li>• Mobile home</li>
              <li>• Container conversion</li>
              <li>• Temporary structure</li>
              <li>• Garden shed</li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="bg-light border-2 border-primary rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">✓ IS</h3>
            <ul className="space-y-3 text-dark">
              <li>✓ Permanent-quality</li>
              <li>✓ Irish standards</li>
              <li>✓ Professional finish</li>
              <li>✓ Turnkey solution</li>
              <li>✓ 2-year warranty</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-dark mb-4">
              The Complete Business Opportunity
            </h2>
            <p className="text-xl text-gray-600">Partnership model with transparent financials</p>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">€50,000</div>
              <div className="text-gray-600 mb-4">Retail Price</div>
              <div className="text-sm text-gray-500">VAT excluded • 25 sqm</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-secondary text-center"
            >
              <div className="text-5xl font-bold text-secondary mb-2">€21,500</div>
              <div className="text-gray-600 mb-4">Profit per Unit</div>
              <div className="text-sm text-gray-500">50/50 split • €10,750 each</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent text-center"
            >
              <div className="text-5xl font-bold text-accent mb-2">1 Day</div>
              <div className="text-gray-600 mb-4">Installation Time</div>
              <div className="text-sm text-gray-500">Including concrete slab</div>
            </motion.div>
          </motion.div>

          {/* Cost Breakdown */}
          <motion.div
            {...fadeInUp}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12"
          >
            <h3 className="text-3xl font-bold text-dark mb-8 text-center">
              Cost Breakdown per Unit
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center bg-light p-6 rounded-xl">
                <div>
                  <div className="font-bold text-dark">China Manufacturing</div>
                  <div className="text-sm text-gray-600">Factory-built complete unit</div>
                </div>
                <div className="text-2xl font-bold text-primary">€15,000</div>
              </div>

              <div className="flex justify-between items-center bg-light p-6 rounded-xl">
                <div>
                  <div className="font-bold text-dark">Shipping & Import</div>
                  <div className="text-sm text-gray-600">Sea freight + customs clearance</div>
                </div>
                <div className="text-2xl font-bold text-primary">€4,500</div>
              </div>

              <div className="flex justify-between items-center bg-light p-6 rounded-xl">
                <div>
                  <div className="font-bold text-dark">Marketing & Operations</div>
                  <div className="text-sm text-gray-600">Business operations & promotion</div>
                </div>
                <div className="text-2xl font-bold text-primary">€5,500</div>
              </div>

              <div className="flex justify-between items-center bg-light p-6 rounded-xl">
                <div>
                  <div className="font-bold text-dark">Installation & Concrete Slab</div>
                  <div className="text-sm text-gray-600">Complete site setup & foundation</div>
                </div>
                <div className="text-2xl font-bold text-primary">€3,500</div>
              </div>
            </div>

            <div className="border-t-4 border-gray-300 pt-6">
              <div className="flex justify-between items-center text-2xl font-bold">
                <span className="text-dark">TOTAL COST PER UNIT</span>
                <span className="text-primary">€28,500</span>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-accent to-secondary p-8 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">€21,500</div>
                <div className="text-lg mb-4">Profit per Unit</div>
                <div className="text-sm opacity-90">Before 50/50 split</div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl text-white text-center">
                <div className="text-4xl font-bold mb-2">€10,750</div>
                <div className="text-lg mb-4">Your Share per Unit</div>
                <div className="text-sm opacity-90">50/50 partnership split</div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Utility connections (water, sewer, electricity) are excluded and quoted separately per site.
              </p>
            </div>
          </motion.div>

          {/* Annual Scenarios */}
          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-2xl shadow-2xl mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Annual Revenue Scenarios
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-white/30">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-white mb-2">50</div>
                  <div className="text-xl text-light">Units per Year</div>
                </div>
                <div className="space-y-3 text-white">
                  <div className="flex justify-between text-lg">
                    <span>Total Revenue:</span>
                    <span className="font-bold">€2,500,000</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Total Profit:</span>
                    <span className="font-bold">€1,075,000</span>
                  </div>
                  <div className="border-t-2 border-white/30 pt-3 mt-3">
                    <div className="flex justify-between text-2xl">
                      <span className="font-bold">Your Share:</span>
                      <span className="font-bold text-accent">€537,500</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl border-2 border-accent">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-white mb-2">70</div>
                  <div className="text-xl text-light">Units per Year</div>
                </div>
                <div className="space-y-3 text-white">
                  <div className="flex justify-between text-lg">
                    <span>Total Revenue:</span>
                    <span className="font-bold">€3,500,000</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Total Profit:</span>
                    <span className="font-bold">€1,505,000</span>
                  </div>
                  <div className="border-t-2 border-white/30 pt-3 mt-3">
                    <div className="flex justify-between text-2xl">
                      <span className="font-bold">Your Share:</span>
                      <span className="font-bold text-accent">€752,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Business Model */}
          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-r from-dark to-primary p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-4">Product Features</h4>
                <ul className="space-y-2 text-white/90">
                  <li>✓ 25 sqm modular home</li>
                  <li>✓ Factory-built to standards</li>
                  <li>✓ Complete turnkey solution</li>
                  <li>✓ Professional installation</li>
                  <li>✓ Concrete slab included</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-4">Complete Package</h4>
                <ul className="space-y-2 text-white/90">
                  <li>✓ Bathroom & kitchen</li>
                  <li>✓ Heating & electrical</li>
                  <li>✓ Furniture included</li>
                  <li>✓ Ready for occupancy</li>
                  <li>✓ 1-day installation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exterior Gallery */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-light">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-dark mb-4">
              Exterior Showcase
            </h2>
            <p className="text-xl text-gray-600">Versatile designs for any setting</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              '/images/exterior-wood.jpg',
              '/images/exterior-side.jpg',
              '/images/showroom-angle.jpg'
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={src}
                  alt={`Exterior view ${i + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Exterior Insulation */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-dark mb-4">
              Exterior Insulation System
            </h2>
            <p className="text-xl text-gray-600">
              High‑performance wall panels showing structure, insulation and finish layers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { src: '/images/exterior-insulation-1.jpg', label: 'Wall panel cross‑section' },
              { src: '/images/exterior-insulation-2.jpg', label: 'Portable sample panel' },
              { src: '/images/exterior-insulation-3.jpg', label: 'Finish, frame and insulation' }
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-lg translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunity */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-16">
            Partnership Opportunity
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            {...fadeInUp}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/bedroom-exterior.jpg"
              alt="Partnership opportunity"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: 'Showroom Display',
                points: ['Display unit in your showroom', 'Generate qualified leads', 'Commission on sales', 'Marketing support provided']
              },
              {
                title: 'Bulk Purchase',
                points: ['Volume discounts available', 'Consistent inventory supply', '40.3% gross margin', 'Flexible payment terms']
              },
              {
                title: 'Exclusive Territory',
                points: ['Protected geographic area', 'First-mover advantage', 'Co-branded marketing', 'Dedicated support team']
              }
            ].map((model, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-light p-6 rounded-xl border-l-4 border-primary"
              >
                <h3 className="text-2xl font-bold text-dark mb-4">{model.title}</h3>
                <ul className="space-y-2">
                  {model.points.map((point, j) => (
                    <li key={j} className="text-gray-700">• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              READY TO PARTNER?
            </h2>
            <p className="text-3xl text-accent mb-12">DON Modular Homes</p>

            <div className="space-y-4 mb-12">
              {[
                'Schedule showroom visit & product demonstration',
                'Review partnership terms & pricing',
                'Finalize agreement & initial order',
                'Launch marketing & sales campaign'
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-dark font-bold text-xl">{i + 1}</span>
                  </div>
                  <span className="text-white text-lg text-left">{step}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-light/80 italic">
              March 2026 Launch | Limited Territories Available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 px-4 text-center">
        <p className="text-lg mb-2">DON Modular Homes</p>
        <p className="text-light/60">Premium Modular Housing Solutions</p>
        <p className="text-light/40 text-sm mt-4">© 2026 All rights reserved</p>
      </footer>
    </main>
  )
}
