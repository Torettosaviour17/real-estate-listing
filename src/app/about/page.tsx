"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  AnimatedText,
} from "../components/ui/AnimatedSection";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stats = [
    { number: "500+", label: "Properties Sold", suffix: "" },
    { number: "50+", label: "Expert Agents", suffix: "" },
    { number: "98%", label: "Client Satisfaction", suffix: "" },
    { number: "15", label: "Years Experience", suffix: "+" },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "With over 15 years in real estate, John leads our vision for innovation and customer satisfaction.",
      initials: "JS",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Sales",
      bio: "Sarah brings extensive market knowledge and a passion for helping clients find their dream homes.",
      initials: "SJ",
    },
    {
      name: "Mike Davis",
      role: "Senior Agent",
      bio: "Mike specializes in luxury properties and has helped hundreds of families find their perfect homes.",
      initials: "MD",
    },
    {
      name: "Emily Wilson",
      role: "Marketing Director",
      bio: "Emily drives our brand vision and ensures we connect with clients through modern marketing strategies.",
      initials: "EW",
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section with Orange & Blue Gradient */}
      <section className="relative py-20 min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Orange & Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400 rounded-full mix-blend-overlay filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-400 rounded-full mix-blend-overlay filter blur-xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, -15, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          ></motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          ></motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About LuxuryHomes
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">Building Dreams,</span>
              <motion.span
                className="block bg-gradient-to-r from-orange-200 to-blue-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                One Home at a Time
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              We are dedicated to helping you find the perfect property that
              matches your lifestyle and dreams. Our innovative approach
              combines technology with personalized service.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                🏡 View Properties
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                📞 Contact Us
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

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${
                    index % 2 === 0 ? "text-orange-600" : "text-blue-600"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                  <span className="text-lg">{stat.suffix}</span>
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.span
                className="inline-block bg-gradient-to-r from-orange-100 to-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Mission
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <AnimatedText>Redefining Real Estate</AnimatedText>{" "}
                <AnimatedText delay={0.2}>
                  <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </AnimatedText>
              </h2>

              <div className="space-y-4 text-lg text-gray-600">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  At{" "}
                  <span className="font-semibold text-gray-900">
                    LuxuryHomes
                  </span>
                  , we believe that finding the perfect home should be an
                  exciting and seamless experience. Our mission is to connect
                  buyers and sellers through innovative technology, personalized
                  service, and deep market expertise.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  We strive to make the real estate journey transparent,
                  efficient, and enjoyable for everyone involved. Every client
                  deserves a personalized approach and exceptional service.
                </motion.p>
              </div>
            </div>

            {/* Visual Element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10"></div>
                <motion.div
                  className="text-white text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-6xl mb-4">🏡</div>
                  <h3 className="text-2xl font-bold mb-2">
                    Your Dream Home Awaits
                  </h3>
                  <p className="text-white/90">Let us help you find it</p>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 bg-orange-300 rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-6 h-6 bg-blue-300 rounded-full"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-100 to-orange-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Values
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Us{" "}
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🔍",
                title: "Quality Listings",
                description:
                  "Every property in our portfolio is carefully vetted to ensure quality and accuracy. We maintain the highest standards.",
                color: "orange",
              },
              {
                icon: "🌟",
                title: "Expert Agents",
                description:
                  "Our team of experienced agents is dedicated to providing exceptional, personalized service to every client.",
                color: "blue",
              },
              {
                icon: "💡",
                title: "Modern Technology",
                description:
                  "We leverage the latest technology to make your real estate journey smooth, efficient, and transparent.",
                color: "orange",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group"
              >
                <div
                  className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group-hover:border-${value.color}-200 h-full`}
                >
                  <motion.div
                    className={`text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                      value.color === "orange"
                        ? "text-orange-500"
                        : "text-blue-500"
                    }`}
                    whileHover={{ rotate: 5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span
              className="inline-block bg-gradient-to-r from-orange-100 to-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The People Behind Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to making your
              real estate journey exceptional.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 group-hover:border-orange-200 text-center h-full">
                  <motion.div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-orange-500 to-orange-600"
                        : "bg-gradient-to-r from-blue-500 to-blue-600"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {member.initials}
                  </motion.div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p
                    className={`font-medium mb-4 ${
                      index % 2 === 0 ? "text-orange-600" : "text-blue-600"
                    }`}
                  >
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.span
              className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Work With Us?
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&#39;s Find Your{" "}
              <span className="text-orange-200">Dream Home</span> Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who found their perfect home
              with our expert guidance.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Contact Us
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/properties"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white border border-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                🏡 Browse Properties
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
