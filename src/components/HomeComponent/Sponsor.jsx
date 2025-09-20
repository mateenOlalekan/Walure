import React, { useState, useEffect } from "react";
import { ExternalLink, Star, Award, TrendingUp } from "lucide-react";

const SponsorGrid = () => {
  const [activeSponsor, setActiveSponsor] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sponsors = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      tier: "platinum",
      description: "Leading provider of cloud services, software, and solutions.",
      website: "https://microsoft.com",
      featured: true,
    },
    {
      id: 2,
      name: "Amazon Web Services",
      logo: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
      tier: "platinum",
      description: "Comprehensive and broadly adopted cloud platform.",
      website: "https://aws.amazon.com",
      featured: true,
    },
    {
      id: 3,
      name: "Google Cloud",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968269.png",
      tier: "gold",
      description: "Enterprise cloud computing services by Google.",
      website: "https://cloud.google.com",
      featured: false,
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
      tier: "gold",
      description:
        "Technology company focused on consumer electronics and software.",
      website: "https://apple.com",
      featured: false,
    },
    {
      id: 5,
      name: "Intel",
      logo: "https://cdn-icons-png.flaticon.com/512/724/724518.png",
      tier: "silver",
      description: "World leader in computing innovation.",
      website: "https://intel.com",
      featured: false,
    },
  ];

  const tierColors = {
    platinum: "from-blue-50 to-blue-100 border-blue-200",
    gold: "from-yellow-50 to-yellow-100 border-yellow-200",
    silver: "from-gray-50 to-gray-100 border-gray-200",
    partner: "from-purple-50 to-purple-100 border-purple-200",
  };

  const tierIcons = {
    platinum: <Star className="w-5 h-5 text-blue-500" />,
    gold: <Award className="w-5 h-5 text-yellow-500" />,
    silver: <TrendingUp className="w-5 h-5 text-gray-500" />,
    partner: <ExternalLink className="w-5 h-5 text-purple-500" />,
  };


  return (
    <section
      id="sponsor"
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Our Technology Partners
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We’re proud to collaborate with global innovators who fuel our
            journey of technology and growth.
          </p>
        </div>



        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`group relative bg-gradient-to-b ${tierColors[sponsor.tier]} rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border p-6 flex flex-col items-center`}
              onMouseEnter={() => setActiveSponsor(sponsor.id)}
              onMouseLeave={() => setActiveSponsor(null)}
            >
              {/* Tier Badge */}
              <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                {tierIcons[sponsor.tier]}
              </div>

              {/* Logo */}
              <div className="w-20 h-20 rounded-full bg-white p-4 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-12 max-w-12 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {sponsor.name}
              </h3>

              {/* Tier */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow text-xs font-medium mb-3 capitalize">
                {sponsor.tier} Partner
              </div>

              {/* Description */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeSponsor === sponsor.id
                    ? "max-h-24 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 text-center">
                  {sponsor.description}
                </p>
              </div>

              {/* Website link */}
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 inline-flex items-center text-sm font-medium text-purple-600 transition-all duration-500 ${
                  activeSponsor === sponsor.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                Visit website
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorGrid;
