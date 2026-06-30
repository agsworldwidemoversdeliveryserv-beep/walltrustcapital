import { CreditCard, Zap, Percent, Gift, Lock, Smartphone } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function PersonalBanking() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Personal Banking</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Complete financial solutions tailored for your personal and family needs
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Products"
            title="Everything You Need"
            description="From everyday banking to wealth management"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<CreditCard size={24} />}
              title="Checking Accounts"
              description="No-fee checking with unlimited transactions, bill pay, and mobile deposit"
              delay={1}
            />
            <FeatureCard
              icon={<Percent size={24} />}
              title="High-Yield Savings"
              description="Competitive interest rates on your savings to help your money grow"
              delay={2}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Quick Loans"
              description="Fast loan processing with competitive rates for personal needs"
              delay={3}
            />
            <FeatureCard
              icon={<Gift size={24} />}
              title="Rewards Program"
              description="Earn points on every purchase and redeem for exclusive benefits"
              delay={4}
            />
            <FeatureCard
              icon={<Lock size={24} />}
              title="Investment Services"
              description="Start investing with automated portfolio management and robo-advisor"
              delay={5}
            />
            <FeatureCard
              icon={<Smartphone size={24} />}
              title="Mobile Banking"
              description="Full banking capabilities on your phone, available 24/7"
              delay={6}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Why Choose Our Personal Banking?" />

          <div className="space-y-6">
            {[
              { title: "Zero Monthly Fees", description: "No hidden charges, completely transparent pricing" },
              { title: "24/7 Customer Support", description: "Our dedicated support team is always available to help" },
              { title: "Advanced Security", description: "Multi-factor authentication and fraud detection" },
              { title: "Fast Transfers", description: "Send money to any US bank account in seconds" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-4 border-l-4 border-walltrust-primary">
                <div className="w-8 h-8 bg-walltrust-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Open Your Account?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join our platform and start managing your finances with Walltrust Capital
          </p>
          <Link href="/signup" className="btn-primary inline-block">
            Open Account Today
          </Link>
        </div>
      </section>
    </>
  );
}
