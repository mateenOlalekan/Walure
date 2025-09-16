import React, { useState, useEffect } from "react";
import {   Monitor,   Coffee,   Wifi,   Users,   Star,   ArrowRight,  Calendar,} from "lucide-react";
import loung3 from "../../assets/hero/lounge.webp";
// ExperienceBlock component (assuming this is what we're enhancing)
const ExperienceBlock = ({ 
  title, 
  description, 
  reverse, 
  image, 
  features 
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center justify-between`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-lg mb-6">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                {index % 4 === 0 && <Monitor className="w-4 h-4 text-purple-600" />}
                {index % 4 === 1 && <Wifi className="w-4 h-4 text-purple-600" />}
                {index % 4 === 2 && <Users className="w-4 h-4 text-purple-600" />}
                {index % 4 === 3 && <Coffee className="w-4 h-4 text-purple-600" />}
              </div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
        
        <button className="inline-flex items-center text-purple-600 font-medium group">
          Learn more
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Replace local images with Unsplash URLs
  const image01 = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const image02 = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const image03 = loung3;

  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-8 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl w-full flex flex-col gap-16 md:gap-24">
        {/* Section Header */}
        <header className="text-center mb-4">
          <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 mb-4">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Premium Amenities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expand Your Experience With Our
            <span className="text-purple-600"> Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our thoughtfully designed spaces that blend productivity with comfort, 
            perfect for training, creating, and connecting.
          </p>
        </header>



        {/* Experience Blocks */}
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ExperienceBlock
            title="Training and Meeting Room"
            description="Our state-of-the-art training facilities feature cutting-edge technology and ergonomic design. Perfect for workshops, corporate training, and collaborative meetings with capacity for up to 50 people."
            reverse={false}
            image={image01}
            features={["4K Projection", "High-Speed WiFi", "Catering Options", "Flexible Layouts"]}
          />
        </div>

        <div className={`transition-all duration-1000 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ExperienceBlock
            title="Media Studio"
            description="A professional-grade creative space equipped with industry-standard equipment for photography, video production, and audio recording. Perfect for content creators and professional productions."
            reverse={true}
            image={image02}
            features={["Green Screen", "Professional Lighting", "Soundproofing", "Equipment Rental"]}
          />
        </div>

        <div className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ExperienceBlock
            title="Lounge"
            description="Our premium lounge area offers a sophisticated environment for networking, casual meetings, or simply relaxing between sessions. Featuring comfortable seating and refreshment services."
            reverse={false}
            image={image03}
            features={["Comfortable Seating", "Refreshment Bar", "Quiet Zones", "Networking Events"]}
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-gradient-to-r from-purple-600 to-purple-600 rounded-2xl p-10 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Our Premium Spaces?</h3>
          <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
            Book a tour today and discover how our spaces can elevate your work and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-medium py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors inline-flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Check for Avaliablity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}