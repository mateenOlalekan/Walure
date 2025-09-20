import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Shield, ArrowRight, Server, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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
      alert('Admin login successful!');
    }, 1500);
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      <div className="w-full bg-white shadow-2xl overflow-hidden flex">
        
        {/* Left Side - Security / Admin Brand */}
        <div 
          className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2073&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/60"></div>

          <div className="relative z-10 text-white p-8 md:p-12 flex flex-col justify-center h-full">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">WO</span>
          </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Wavora Online
              </span>
            </div>

            {/* Admin Value Props */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="bg-red-600 rounded-full p-2">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/95">Manage members & staff</span>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="bg-red-600 rounded-full p-2">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/95">Oversee bookings & events</span>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="bg-red-600 rounded-full p-2">
                  <Server className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/95">Access analytics & reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Admin Login Form */}
        <div className="w-full lg:w-1/2 h-screen overflow-y-auto">
          <div className="p-8 md:p-12 flex flex-col justify-center min-h-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Admin Login</h2>
              <p className="text-gray-600">Enter your credentials to access the dashboard</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Email
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
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    placeholder="admin@techbunker.com"
                    required
                  />
                </div>
              </div>

              {/* Password */}
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
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
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

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-75 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Logging in...
                    </>
                  ) : (
                    <>
                      Login
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Not an admin?{' '}
                <Link to="/login" className="font-medium text-red-600 hover:text-red-500 transition-colors">
                  Go to User Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
