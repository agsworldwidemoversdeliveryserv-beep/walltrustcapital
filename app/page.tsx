import { ArrowRight, Shield, Zap, Globe, TrendingUp, Lock, Smartphone, BarChart3 } from "lucide-react";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-20 pb-20 px-4 flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-walltrust-primary/10 to-walltrust-secondary/10 rounded-full blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-walltrust-primary/10 to-walltrust-secondary/10 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <p className="text-walltrust-primary font-semibold uppercase tracking-wider text-sm mb-4">Welcome to the Future</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Premium Digital <span className="gradient-text">Banking</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                Experience banking reimagined. Walltrust Capital delivers cutting-edge financial solutions designed for the modern world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/personal-banking" className="btn-primary inline-flex items-center justify-center group">
                  Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="card-premium p-8 border-2 border-walltrust-secondary/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-4">
                  <div className="h-12 bg-gradient-to-r from-walltrust-primary/10 to-walltrust-secondary/10 rounded-lg" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark" />
                    <div className="h-32 bg-gradient-to-br from-walltrust-secondary/5 to-walltrust-primary/5 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark" />
                  </div>
                  <div className="h-20 bg-gradient-to-r from-walltrust-primary/10 to-walltrust-secondary/10 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Why Choose Walltrust"
            title="Banking Redefined"
            description="Everything you need for complete financial management in one powerful platform"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Smartphone size={24} />}
              title="Mobile First"
              description="Manage your finances anywhere, anytime with our intuitive mobile app"
              delay={1}
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Bank Grade Security"
              description="Military-grade encryption protects your data and transactions"
              delay={2}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Lightning Fast"
              description="Transactions processed in seconds, not days"
              delay={3}
            />
            <FeatureCard
              icon={<Globe size={24} />}
              title="Global Access"
              description="Send and receive money worldwide with competitive rates"
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Products"
            title="Comprehensive Banking Solutions"
            description="Tailored financial products for every need"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Personal Banking */}
            <Link href="/personal-banking" className="group">
              <div className="card-premium p-8 h-full">
                <TrendingUp className="w-12 h-12 text-walltrust-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Personal Banking</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Checking accounts, savings, loans, and investment products designed for your financial goals.
                </p>
                <span className="text-walltrust-primary font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="ml-2" size={20} />
                </span>
              </div>
            </Link>

            {/* Business Banking */}
            <Link href="/business-banking" className="group">
              <div className="card-premium p-8 h-full">
                <BarChart3 className="w-12 h-12 text-walltrust-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Business Banking</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Payroll, cash management, and credit facilities to grow your business.
                </p>
                <span className="text-walltrust-primary font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="ml-2" size={20} />
                </span>
              </div>
            </Link>

            {/* Digital Banking */}
            <Link href="/digital-banking" className="group">
              <div className="card-premium p-8 h-full">
                <Lock className="w-12 h-12 text-walltrust-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Digital Banking</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Complete online and mobile banking with top-tier security and 24/7 support.
                </p>
                <span className="text-walltrust-primary font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="ml-2" size={20} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-walltrust-primary to-walltrust-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Banking?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of users experiencing the future of banking with Walltrust Capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-4 bg-white text-walltrust-primary font-semibold rounded-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center">
              Open Account <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
