"use client";
import {
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
  Building,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-purple-800 to-purple-900 text-white pt-20 pb-12 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">WO</span>
          </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Wavora Online
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-purple-200 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                hello@workspacepro.com
              </div>
              <div className="flex items-center text-purple-200 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-purple-200 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 mr-3" />
                123 Innovation Drive, Tech City
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold relative inline-block pb-1">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-400"></span>
            </h2>
            <ul className="space-y-3">
              {["About Us", "Features", "Pricing"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="flex items-center text-purple-200 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold relative inline-block pb-1">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-400"></span>
            </h2>
            <p className="text-purple-200 text-sm">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form className="flex bg-white/10 rounded-lg overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full bg-transparent text-white placeholder-purple-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 px-5 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold relative inline-block pb-1">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-purple-400"></span>
            </h2>
            <form className="flex flex-col gap-4 bg-white/5 p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center text-purple-300 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
            <span>by WorkspacePro Team</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-purple-300 text-sm">
              © {new Date().getFullYear()} WorkspacePro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, i) => (
                  <a
                    key={i}
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-purple-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
