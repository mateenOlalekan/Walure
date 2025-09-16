"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Wifi,
  Coffee,
  Monitor,
} from "lucide-react";
import loung3 from "../../assets/hero/cospace03.webp"

const features = [
  {
    icon: Users,
    title: "Collaborative Areas",
    desc: "Spaces designed for team brainstorming and meetings",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    desc: "Reliable connectivity for seamless work",
  },
  {
    icon: Coffee,
    title: "Refreshment Stations",
    desc: "Complimentary coffee, tea, and snacks",
  },
  {
    icon: Monitor,
    title: "Tech Equipment",
    desc: "Screens, projectors, and video conferencing tools",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80",
    alt: "Private office space",
  },
  {
    src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    alt: "Meeting room",
  },
  {
    src: loung3,
    alt: "Coworking space",
  },
];

export default function Main() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover where <span className="text-purple-600">ideas</span> meet
            space
          </h2>
        </motion.div>

        {/* Hero Row */}
        <div className="w-full flex max-lg:flex-col items-center gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:w-1/2"
          >
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-purple-600 mb-6">
              Transform how you work and collaborate
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Our thoughtfully designed spaces bring together comfort,
              technology, and inspiration to help teams do their best work.
              From private offices to collaborative areas, we've created
              environments that foster creativity and productivity.
            </p>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors shadow-lg">
              Explore our spaces
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="Modern collaborative workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible work spaces designed for focus
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our spaces are meticulously designed to support different work
              styles. Whether you need deep focus areas or collaborative zones,
              we've created environments that adapt to your needs throughout
              the day.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-extrabold text-purple-600">100+</p>
                <p className="text-gray-600">Spaces Available</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <p className="text-3xl font-extrabold text-purple-600">24/7</p>
                <p className="text-gray-600">Access</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-purple-50 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
            Explore Our Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg h-64 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
