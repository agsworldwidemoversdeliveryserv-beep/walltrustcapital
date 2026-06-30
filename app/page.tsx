import { ArrowRight, Shield, Zap, Globe, TrendingUp, Lock, Smartphone, BarChart3, CheckCircle2, Briefcase, PieChart, Layers, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const stats = [
    { number: "$2.4B", label: "Assets Under Management" },
    { number: "150K+", label: "Active Clients" },
    { number: "45+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ];

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Wealth Management",
      description: "Personalized investment strategies tailored to your financial goals and risk profile.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Advisory",
      description: "Expert guidance on portfolio diversification, asset allocation, and market opportunities.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Corporate Finance",
      description: "Comprehensive financial solutions for businesses of all sizes, from startups to enterprises.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Banking Solutions",
      description: "Seamless mobile and online banking experience with advanced security features.",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Asset Management",
      description: "Professional management of investment portfolios with transparent reporting and analytics.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Financial Planning",
      description: "Complete financial roadmap covering retirement, education, and wealth preservation.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechStart Ventures",
      content: "Walltrust Capital has been instrumental in managing our investment portfolio. Their platform is intuitive and their team is exceptionally knowledgeable.",
      image: "SM",
    },
    {
      name: "James Chen",
      role: "Founder, Global Innovations",
      content: "The level of service and financial expertise at Walltrust Capital is unmatched. They've helped us grow our assets significantly.",
      image: "JC",
    },
    {
      name: "Emma Rodriguez",
      role: "CFO, Enterprise Solutions Inc.",
      content: "Their corporate finance solutions have streamlined our operations and improved cash flow management considerably.",
      image: "ER",
    },
  ];

  return (
    <>\n      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-20 px-4 flex items-center relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-walltrust-primary/20 to-walltrust-secondary/20 rounded-full blur-3xl opacity-40 animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-walltrust-primary/20 to-walltrust-secondary/20 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-walltrust-secondary/15 to-transparent rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-walltrust-primary/10 dark:bg-walltrust-primary/20 px-4 py-2 rounded-full">
                  <Sparkles size={16} className="text-walltrust-primary" />
                  <span className="text-walltrust-primary font-semibold text-sm">Welcome to Premium Banking</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Transform Your <span className="gradient-text">Financial Future</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                  Access world-class investment solutions, expert financial guidance, and innovative banking technology all in one secure platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup" className="btn-primary inline-flex items-center justify-center group">
                  Get Started Today <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link href="#how-it-works" className="btn-secondary inline-flex items-center justify-center">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="card-premium p-8 border-2 border-walltrust-secondary/20 animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-6">
                  <div className="h-16 bg-gradient-to-r from-walltrust-primary/20 to-walltrust-secondary/20 rounded-xl" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-40 bg-gradient-to-br from-walltrust-primary/10 to-walltrust-secondary/10 rounded-xl border border-walltrust-border dark:border-walltrust-border-dark" />
                    <div className="h-40 bg-gradient-to-br from-walltrust-secondary/10 to-walltrust-primary/10 rounded-xl border border-walltrust-border dark:border-walltrust-border-dark" />
                  </div>
                  <div className="h-24 bg-gradient-to-r from-walltrust-primary/10 to-walltrust-secondary/10 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-walltrust-primary/5 to-walltrust-secondary/5 dark:from-walltrust-primary/10 dark:to-walltrust-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} delay={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Walltrust */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Why Choose Walltrust"
            title="Banking Reimagined for Excellence"
            description="Everything you need for comprehensive financial management in one powerful platform"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Smartphone size={24} />}
              title="Mobile First"
              description="Manage your finances anywhere, anytime with our intuitive mobile and web applications"
              delay={1}
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Enterprise Security"
              description="Bank-grade encryption and multi-factor authentication protect your data"
              delay={2}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Lightning Fast"
              description="Transactions processed in seconds with minimal latency"
              delay={3}
            />
            <FeatureCard
              icon={<Globe size={24} />}
              title="Global Access"
              description="Send and receive funds worldwide with competitive exchange rates"
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Services"
            title="Comprehensive Financial Solutions"
            description="Tailored services designed to meet your unique financial needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Getting Started"
            title="How It Works"
            description="Simple steps to get started with Walltrust Capital"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up with your email and complete identity verification",
              },
              {
                step: "02",
                title: "Fund Your Account",
                description: "Add funds via bank transfer, card, or digital payment",
              },
              {
                step: "03",
                title: "Explore Services",
                description: "Browse investment options and financial products",
              },
              {
                step: "04",
                title: "Start Growing",
                description: "Begin your investment journey with expert guidance",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold gradient-text mb-4 opacity-20">{item.step}</div>
                <div className="card-premium p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-walltrust-card to-walltrust-background dark:from-walltrust-card-dark dark:to-walltrust-background-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Client Success Stories"
            title="What Our Clients Say"
            description="Real feedback from users who trust Walltrust Capital"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            eyebrow="Support"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services"
          />
          <FAQSection />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-walltrust-primary to-walltrust-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest insights on financial markets, investment tips, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-walltrust-secondary"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-walltrust-secondary text-walltrust-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs opacity-75 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Banking?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of users experiencing the future of premium financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary inline-flex items-center justify-center">
              Open Account <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
