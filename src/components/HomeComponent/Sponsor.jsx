/**
 * SponsorSection
 * - Displays partner/sponsor logos with hover effects
 * - Responsive grid layout
 * - Accessible (alt text for logos)
 * 
 * Usage: <SponsorSection />
 */

import React from "react";
import { motion } from "framer-motion";

const sponsors = [
  {
    id: 1,
    name: "Google Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    url: "https://cloud.google.com",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    url: "https://microsoft.com",
  },
  {
    id: 3,
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    url: "https://aws.amazon.com",
  },
  {
    id: 4,
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    url: "https://github.com",
  },
  {
    id: 5,
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/250px-Stripe_Logo%2C_revised_2016.svg.png",
    url: "https://stripe.com",
  },
];

export default function SponsorSection() {
  return (
    <section className="relative bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-purple-600 tracking-wide uppercase">
          Trusted By
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
          Our Global Tech Partners & Sponsors
        </p>
        <p className="mt-3 max-w-2xl mx-auto text-purple-500 text-lg">
          Backed by world-class organizations committed to empowering innovation
          and technology growth across Africa.
        </p>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {sponsors.map((sponsor) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center transition"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="h-12 sm:h-14 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
