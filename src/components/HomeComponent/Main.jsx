import { CheckCircle, ArrowRight, Users, Wifi, Coffee, Monitor } from "lucide-react";

export default function Main() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover where ideas meet space
          </h2>
        </div>

        {/* Content Row (Text + Image) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Text */}
          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="font-bold text-4xl md:text-[48px] lg:text-5xl leading-[110%] text-gray-900 mb-6">
              Transform how you work and collaborate
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Our thoughtfully designed spaces bring together comfort, technology, and inspiration to help teams do their best work. From private offices to collaborative areas, we've created environments that foster creativity and productivity.
            </p>
            <button className="flex items-center gap-2 text-blue-600 font-medium text-lg group">
              Explore our spaces
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Modern collaborative workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Flexible work spaces designed for focus
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our spaces are meticulously designed to support different work styles. Whether you need deep focus areas or collaborative zones, we've created environments that adapt to your needs throughout the day.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">100+</p>
                <p className="text-gray-600">Spaces Available</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">24/7</p>
                <p className="text-gray-600">Access</p>
              </div>
            </div>
          </div>

          {/* Right Features List with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-1/2">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 group hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Collaborative Areas</h3>
              <p className="text-gray-600">Spaces designed for team brainstorming and meetings</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 group hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Wifi className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">High-Speed Internet</h3>
              <p className="text-gray-600">Reliable connectivity for seamless work</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 group hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Coffee className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Refreshment Stations</h3>
              <p className="text-gray-600">Complimentary coffee, tea, and snacks</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-6 group hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Tech Equipment</h3>
              <p className="text-gray-600">Screens, projectors, and video conferencing tools</p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Explore Our Spaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Private office space"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Meeting room"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="https://images.unsplash.com/photo-1592903297141-6b4b4c6c834e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Coworking space"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
