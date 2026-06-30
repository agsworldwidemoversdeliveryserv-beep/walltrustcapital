import { BarChart3, Users, TrendingUp, FileText, Zap, Shield } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function BusinessBanking() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Business Banking</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Powerful financial tools designed to scale your business
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Business Solutions"
            title="Drive Growth with Walltrust"
            description="Comprehensive banking tools for businesses of all sizes"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<BarChart3 size={24} />}
              title="Business Checking"
              description="Streamlined checking accounts with invoicing and expense tracking"
              delay={1}
            />
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="Growth Capital"
              description="Flexible loans to fuel your business expansion and operations"
              delay={2}
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Payroll Services"
              description="Automated payroll processing for your entire team"
              delay={3}
            />
            <FeatureCard
              icon={<FileText size={24} />}
              title="Invoice Management"
              description="Send, track, and get paid faster with our invoice system"
              delay={4}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Payment Processing"
              description="Accept payments from customers with low transaction fees"
              delay={5}
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Treasury Management"
              description="Optimize cash flow and manage your business finances efficiently"
              delay={6}
            />
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Flexible Plans for Every Business" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Startup", price: "$0", features: ["Checking Account", "Payment Processing", "Invoicing", "Email Support"] },
              { name: "Growth", price: "$29/mo", features: ["All Startup Features", "Payroll Processing", "Advanced Analytics", "Priority Support", "Business Loans"], highlighted: true },
              { name: "Enterprise", price: "Custom", features: ["All Growth Features", "Dedicated Account Manager", "Custom Solutions", "API Access", "24/7 Phone Support"] },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 transition-all ${plan.highlighted ? 'border-walltrust-secondary bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5 scale-105' : 'border-walltrust-border dark:border-walltrust-border-dark'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-walltrust-primary mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-3">
                      <span className="w-5 h-5 bg-walltrust-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={plan.highlighted ? "btn-primary w-full" : "btn-secondary w-full"}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Scale Your Business Today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Get started with Walltrust Business Banking and unlock your company&apos;s potential
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
