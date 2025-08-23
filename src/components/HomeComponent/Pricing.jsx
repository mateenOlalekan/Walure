import  { useState } from "react";
import { CheckCircle, Star, Calendar, ArrowRight } from "lucide-react";

const spaces = [
  {
    title: "Yearly",
    description: "Access our premium spaces all year round with exclusive perks and discounted rates.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    price: "$299",
    period: "/month",
    features: ["All access pass", "24/7 availability", "Free meeting rooms", "Priority support", "Discount on events"],
    popular: true,
    savings: "Save 20%"
  },
  {
    title: "Monthly",
    description: "Perfect for growing teams and freelancers who need consistent access every month.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    price: "$349",
    period: "/month",
    features: ["Flexible access", "Business address", "High-speed internet", "Complimentary drinks", "Community events"],
    popular: false,
    savings: "Most flexible"
  },
  {
    title: "Weekly",
    description: "Flexible access tailored for short-term needs, workshops, and events.",
    image: "https://images.unsplash.com/photo-1592903297141-6b4b4c6c834e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    price: "$99",
    period: "/week",
    features: ["Pay as you go", "Day passes available", "Event space access", "Basic amenities", "Networking opportunities"],
    popular: false,
    savings: "No commitment"
  },
];


export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full flex flex-col items-center py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Section 1: Explore Spaces */}
      <div className="max-w-7xl w-full mb-16 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          Flexible Booking Options
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Explore our versatile spaces
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find the perfect workspace that fits your needs — whether for a year,
          a month, or just a week. All plans include high-speed internet, printing facilities, and refreshments.
        </p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {spaces.map((space, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col group relative ${
              space.popular ? "ring-2 ring-blue-500 transform hover:-translate-y-1" : "border border-gray-100"
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {space.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Most Popular
              </div>
            )}
            
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-lg">
                {space.savings}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{space.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-900">{space.price}</span>
                <span className="text-gray-500 ml-1">{space.period}</span>
              </div>
              <p className="text-gray-600 mb-4 flex-1">{space.description}</p>
              
              <div className="mb-6">
                {space.features.map((feature, i) => (
                  <div key={i} className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`mt-auto w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                space.popular 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "bg-blue-600 hover:bg-blue-700"
              } flex items-center justify-center group-hover:shadow-lg`}>
                Book Space
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
