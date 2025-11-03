"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  AnimatedText,
} from "../components/ui/AnimatedSection";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form data:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 text-white overflow-hidden">
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
              Get In Touch
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">Let&#39;s Start</span>
              <motion.span
                className="block bg-gradient-to-r from-orange-200 to-blue-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                The Conversation
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Get in touch with our team. We are here to help you with all your
              real estate needs and answer any questions you may have.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Get In{" "}
                <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>

              <div className="space-y-8">
                {/* Office Location */}
                <motion.div
                  className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-orange-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Visit Our Office
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Real Estate Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 123-4568
                      <br />
                      Mon-Fri from 8am to 6pm
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-orange-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      info@luxuryhomes.com
                      <br />
                      support@luxuryhomes.com
                      <br />
                      We all respond within 24 hours
                    </p>
                  </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                  className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: "Facebook",
                        color: "hover:bg-orange-100",
                        icon: "FB",
                      },
                      {
                        name: "Twitter",
                        color: "hover:bg-blue-100",
                        icon: "TW",
                      },
                      {
                        name: "Instagram",
                        color: "hover:bg-orange-100",
                        icon: "IG",
                      },
                      {
                        name: "LinkedIn",
                        color: "hover:bg-blue-100",
                        icon: "IN",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href="#"
                        className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} border border-gray-200`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-gray-600 font-semibold">
                          {social.icon}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <motion.span
                  className="inline-block bg-gradient-to-r from-orange-100 to-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Send us a Message
                </motion.span>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let&apos;s{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    Connect
                  </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you with your real estate needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </motion.button>
                </form>

                <motion.p
                  className="text-center text-gray-500 text-sm mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We typically respond within 2-4 hours during business days
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map & Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-100 to-orange-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Visit Us
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Office
              </span>{" "}
              Location
            </h2>
          </AnimatedSection>

          {/* Map Placeholder */}
          <motion.div
            className="bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl p-12 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-2xl font-bold mb-4">
                Interactive Map Coming Soon
              </h3>
              <p className="text-white/90 text-lg mb-6">
                We are working on adding an interactive map to help you find our
                office easily.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
                <p className="font-semibold">123 Real Estate Avenue</p>
                <p className="text-white/90">New York, NY 10001</p>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                day: "Monday - Friday",
                hours: "8:00 AM - 6:00 PM",
                icon: "🏢",
              },
              { day: "Saturday", hours: "9:00 AM - 4:00 PM", icon: "🌅" },
              { day: "Sunday", hours: "Closed", icon: "🚪" },
            ].map((schedule, index) => (
              <motion.div
                key={schedule.day}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group-hover:border-orange-200">
                  <div
                    className={`text-4xl mb-4 ${
                      index === 0
                        ? "text-orange-500"
                        : index === 1
                        ? "text-blue-500"
                        : "text-gray-400"
                    }`}
                  >
                    {schedule.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {schedule.day}
                  </h3>
                  <p
                    className={`text-lg font-medium ${
                      index === 2 ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {schedule.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
