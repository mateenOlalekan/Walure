import { MapPin, Twitter, Linkedin, Instagram, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mb-16">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H5m4 0h4m4 0h4m-8 0V9a1 1 0 00-1-1H6a1 1 0 00-1 1v12h4zm4 0V9a1 1 0 011-1h4a1 1 0 011 1v12h-6z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">WorkspacePro</span>
            </div>
 
            <div className="flex items-center text-gray-400 mb-3">
              <Mail className="w-5 h-5 mr-3 text-purple-500" />
              <span>hello@workspacepro.com</span>
            </div>
            <div className="flex items-center text-gray-400 mb-4">
              <Phone className="w-5 h-5 mr-3 text-purple-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-purple-400 cursor-pointer group">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="group-hover:underline transition-all">View on the map</span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold mb-6 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-purple-600"></span>
            </h1>
            <div className="space-y-3">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">About Us</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Features</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Contact Us</p>
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold mb-6 relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-purple-600"></span>
            </h1>
            <div className="space-y-3">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Login</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Sign Up</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Help Center</p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-purple-600"></span>
            </h1>
            <div className="flex gap-4 mb-8">
              <div className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-purple-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-purple-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 p-3 rounded-full cursor-pointer hover:bg-purple-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WorkspacePro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <p className="text-gray-500 hover:text-white cursor-pointer text-sm transition-colors duration-300">Privacy Policy</p>
            <p className="text-gray-500 hover:text-white cursor-pointer text-sm transition-colors duration-300">Terms of Service</p>
            <p className="text-gray-500 hover:text-white cursor-pointer text-sm transition-colors duration-300">Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}