'use client';

import { useState } from 'react';
import { Mail, Lock, User, Phone, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      alert('Account created! This is a demo of the fictional platform.');
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 flex items-center">
      <div className="max-w-md mx-auto w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-walltrust-primary to-walltrust-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">W</span>
          </div>
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Join Walltrust Capital today</p>
        </div>

        {/* Progress */}
        <div className="flex space-x-2 mb-8">
          <div className={`flex-1 h-1 rounded-full transition-all ${step >= 1 ? 'bg-walltrust-primary' : 'bg-gray-300 dark:bg-gray-600'}`} />
          <div className={`flex-1 h-1 rounded-full transition-all ${step >= 2 ? 'bg-walltrust-primary' : 'bg-gray-300 dark:bg-gray-600'}`} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card-premium p-8 space-y-6 mb-6">
          {step === 1 ? (
            <>
              <h2 className="text-xl font-bold mb-6">Basic Information</h2>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-semibold mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-semibold mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full font-bold py-3 flex items-center justify-center">
                Next <ArrowRight className="ml-2" size={20} />
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-6">Create Password</h2>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block font-semibold mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start space-x-2">
                <input type="checkbox" required className="w-4 h-4 rounded border-walltrust-border cursor-pointer mt-1 flex-shrink-0" />
                <span className="text-sm">
                  I agree to the <Link href="/terms" className="text-walltrust-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-walltrust-primary hover:underline">Privacy Policy</Link>
                </span>
              </label>

              <button type="submit" className="btn-primary w-full font-bold py-3">
                Create Account
              </button>
            </>
          )}

          {/* Demo Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-sm text-blue-800 dark:text-blue-200">
            💡 This is a demo signup page. No real account will be created.
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account? <Link href="/login" className="text-walltrust-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
