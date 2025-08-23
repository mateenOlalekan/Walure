import React, { useState, useEffect } from "react";
import {  ExternalLink, Star, Award, TrendingUp } from "lucide-react";



const SponsorGrid = () => {
  const [activeSponsor, setActiveSponsor] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const sponsors = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
      tier: "platinum",
      description: "Leading provider of cloud services, software, and solutions.",
      website: "https://microsoft.com",
      featured: true
    },
    {
      id: 2,
      name: "Amazon Web Services",
      logo: "https://cdn-icons-png.flaticon.com/512/6033/6033716.png",
      tier: "platinum",
      description: "Comprehensive and broadly adopted cloud platform.",
      website: "https://aws.amazon.com",
      featured: true
    },
    {
      id: 3,
      name: "Google Cloud",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968269.png",
      tier: "gold",
      description: "Enterprise cloud computing services by Google.",
      website: "https://cloud.google.com",
      featured: false
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
      tier: "gold",
      description: "Technology company focused on consumer electronics and software.",
      website: "https://apple.com",
      featured: false
    },
    {
      id: 5,
      name: "Intel",
      logo: "https://cdn-icons-png.flaticon.com/512/724/724518.png",
      tier: "silver",
      description: "World leader in computing innovation.",
      website: "https://intel.com",
      featured: false
    },
  ];

  const tierColors = {
    platinum: "from-blue-100 to-blue-50 border-blue-200",
    gold: "from-blue-100 to-blue-50 border-blue-200",
    silver: "from-gray-100 to-gray-50 border-gray-200",
    partner: "from-purple-100 to-purple-50 border-purple-200"
  };

  const tierIcons = {
    platinum: <Star className="w-5 h-5 text-blue-500" />,
    gold: <Award className="w-5 h-5 text-blue-500" />,
    silver: <TrendingUp className="w-5 h-5 text-blue-500" />,
    partner: <ExternalLink className="w-5 h-5 text-blue-500" />
  };

  const featuredSponsors = sponsors.filter(sponsor => sponsor.featured);
  
  useEffect(() => {
    if (featuredSponsors.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === featuredSponsors.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [featuredSponsors.length]);


  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to collaborate with industry leaders who share our vision 
            for innovation and technological advancement.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`group relative bg-gradient-to-b ${tierColors[sponsor.tier]} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border p-6 flex flex-col items-center cursor-pointer`}
              onMouseEnter={() => setActiveSponsor(sponsor.id)}
              onMouseLeave={() => setActiveSponsor(null)}
            >
              {/* Tier Badge */}
              <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                {tierIcons[sponsor.tier]}
              </div>
              
              <div className="w-20 h-20 rounded-full bg-white p-4 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-12 max-w-12 object-contain transition-all duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {sponsor.name}
              </h3>
              
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-white text-xs font-medium mb-3 capitalize">
                {sponsor.tier} Partner
              </div>
              
              {/* Description appears on hover */}
              <div className={`overflow-hidden transition-all duration-300 ${
                activeSponsor === sponsor.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-sm text-gray-600 text-center">
                  {sponsor.description}
                </p>
              </div>
              
              {/* View website link appears on hover */}
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 inline-flex items-center text-xs font-medium text-blue-600 transition-all duration-300 ${
                  activeSponsor === sponsor.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Visit website
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SponsorGrid;