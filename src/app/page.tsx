"use client";

import { motion } from "framer-motion";
import { properties } from "./data/properties";
import PropertyCard from "./components/features/properties/PropertyCard";
import Link from "next/link";
import { AnimatedSection, AnimatedText } from "./components/ui/AnimatedSection";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* 🏡 Hero Section - ADD YOUR BACKGROUND IMAGE HERE */}
      <section className="relative min-h-screen flex items-center justify-center text-white py-20 overflow-hidden">
        {/* ADD YOUR BACKGROUND IMAGE IN THIS DIV */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // ADD YOUR IMAGE URL HERE:
            backgroundImage: 'url("/images/backgrounds/hero.png")',
            // backgroundColor: "#1e40af", // Temporary fallback color
          }}
        >
          {/* Dark overlay for better text readability - adjust opacity as needed */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Find Your</span>
              <motion.span
                className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Dream Home
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover the perfect property that matches your lifestyle and
              budget. Premium real estate with modern design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="📍 Search by location, property type..."
                className="w-full sm:w-96 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg bg-white/95 border border-white/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 whitespace-nowrap shadow-lg border border-orange-400/50"
              >
                🔍 Search Properties
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* 🏠 Featured Properties Section - Show Only 3 Properties */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Featured Properties
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <AnimatedText>Featured</AnimatedText>{" "}
              <AnimatedText delay={0.2}>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Listings
                </span>
              </AnimatedText>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties. Find your
              perfect match from our curated collection.
            </p>
          </AnimatedSection>

          {/* Property Cards Grid - Only Show First 3 Properties */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {properties.slice(0, 3).map((property, index) => (
              <motion.div key={property.id} variants={itemVariants}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>

          {/* Browse More Button */}
          <AnimatedSection
            delay={0.6}
            className="text-center mt-16 relative z-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                🌟 View All {properties.length} Properties
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      {/* 📊 Stats Section - CLEAN BACKGROUND */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { number: "500+", label: "Properties Listed", emoji: "🏠" },
              { number: "50+", label: "Expert Agents", emoji: "👨‍💼" },
              { number: "98%", label: "Client Satisfaction", emoji: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="text-4xl mb-4">{stat.emoji}</div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* 🚀 CTA Section - ADD YOUR BACKGROUND IMAGE HERE */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* ADD YOUR BACKGROUND IMAGE IN THIS DIV */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // ADD YOUR IMAGE URL HERE:
            // backgroundImage: 'url("/images/your-cta-image.jpg")',
            backgroundColor: "#1e40af", // Temporary fallback color
          }}
        >
          {/* Dark overlay for better text readability - adjust opacity as needed */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.span
              className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start?
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <AnimatedText>Find Your Next</AnimatedText>{" "}
              <AnimatedText delay={0.2}>
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Dream Home
                </span>
              </AnimatedText>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their perfect home
              with us.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                🏡 Browse All Properties
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/add-property"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl border border-orange-400"
              >
                📝 List Your Property
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
