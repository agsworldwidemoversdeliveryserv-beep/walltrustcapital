'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - just for demo
    alert('Login demo - This is a fictional platform');
  };

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 flex items-center">
      <div className="max-w-md mx-auto w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-walltrust-primary to-walltrust-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">W</span>
          </div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to your Walltrust account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card-premium p-8 space-y-6 mb-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block font-semibold">Password</label>
              <Link href="#" className="text-walltrust-primary hover:underline text-sm">Forgot?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Remember Me */}
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 rounded border-walltrust-border cursor-pointer" />
            <span className="text-sm">Remember me</span>
          </label>

          {/* Submit */}
          <button type="submit" className="btn-primary w-full font-bold py-3">
            Sign In
          </button>

          {/* Demo Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-sm text-blue-800 dark:text-blue-200">
            💡 This is a demo login page. Try any email/password combination to explore.
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don&apos;t have an account? <Link href="/signup" className="text-walltrust-primary font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
