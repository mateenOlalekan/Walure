import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, CheckCircle, Facebook, Github, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful!');
    }, 1500);
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      <div className="w-full bg-white shadow-2xl overflow-hidden flex">
        {/* Left side - Hero Section */}
        <div 
          className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2073&auto=format&fit=crop')`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
          
          {/* Content overlay */}
          <div className="relative z-10 text-white p-8 md:p-12 flex flex-col justify-center h-full">
            <div className="flex items-center mb-8 gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">WA</span>
              </div>
              <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wavora Online
              </span>
            </div>
            
            {/* Value props */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/95">Book secure, modern workspaces</span>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/95">Access 24/7 innovation hubs</span>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/95">Member-only networking events</span>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-full p-2 mt-1">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/95 italic text-base leading-relaxed">
                    "TechBunker gives me a safe, inspiring place to code and collaborate.
                    Booking a pod is seamless, and the vibe is unmatched."
                  </p>
                  <p className="text-white/80 text-sm mt-3 font-medium">— Jamal R., Fullstack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 h-screen overflow-y-auto">
          <div className="p-8 md:p-12 flex flex-col justify-center min-h-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Welcome Back to TechBunker</h2>
              <p className="text-gray-600">Log in to book your next workspace</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="inline-flex justify-center items-center gap-2 w-full rounded-lg px-4 py-3 bg-white text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:scale-[1.02]"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
                
                <button
                  type="button"
                  className="inline-flex justify-center items-center gap-2 w-full rounded-lg px-4 py-3 bg-white text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:scale-[1.02]"
                >
                  <Github className="h-5 w-5 text-gray-800" />
                  <span className="text-sm font-medium">GitHub</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Don’t have an account?{' '}
                <Link to="/Register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                  Join TechBunker
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
