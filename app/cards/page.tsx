import { CreditCard, Gift, Percent, Shield, Globe, Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Cards() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Credit & Debit Cards</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Premium cards designed for your lifestyle
          </p>
        </div>
      </section>

      {/* Card Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Card Lineup"
            title="Choose Your Perfect Card"
            description="Tailored cards for every spending style and need"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Standard Debit", color: "from-blue-600 to-blue-700", features: ["No annual fee", "Unlimited transactions", "ATM access worldwide", "Real-time notifications"] },
              { name: "Premium Credit", color: "from-yellow-500 to-yellow-600", features: ["5% cashback", "Travel insurance", "Concierge service", "Priority support"], highlighted: true },
              { name: "Business Card", color: "from-purple-600 to-purple-700", features: ["Expense tracking", "Employee cards", "Business rewards", "Tax reporting"] },
            ].map((card, i) => (
              <div key={i} className={`rounded-3xl p-8 text-white transform transition-all hover:scale-105 ${card.highlighted ? 'scale-105 shadow-2xl' : 'shadow-lg'}`}>
                <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${card.color} mb-6 flex items-end p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-white/20 text-9xl font-bold">◆</div>
                  <div className="relative z-10 w-full">
                    <p className="text-sm text-white/80 mb-1">WALLTRUST</p>
                    <p className="text-2xl font-mono">•••• •••• •••• 4242</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">{card.name}</h3>
                <ul className="space-y-3">
                  {card.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-2 text-white/90">
                      <span className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-white text-walltrust-primary font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Card Benefits"
            title="More Than Just a Card"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Gift size={24} />}
              title="Exclusive Rewards"
              description="Earn points on every purchase and redeem for rewards"
              delay={1}
            />
            <FeatureCard
              icon={<Percent size={24} />}
              title="Cashback Offers"
              description="Get up to 5% cashback on eligible purchases"
              delay={2}
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Fraud Protection"
              description="Zero liability for unauthorized transactions"
              delay={3}
            />
            <FeatureCard
              icon={<Globe size={24} />}
              title="Global Acceptance"
              description="Use your card at millions of merchants worldwide"
              delay={4}
            />
            <FeatureCard
              icon={<CreditCard size={24} />}
              title="Virtual Cards"
              description="Create unlimited virtual cards for online shopping"
              delay={5}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Instant Issuance"
              description="Get a digital card instantly, physical card in 7 days"
              delay={6}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your Card?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Apply in minutes and start earning rewards with Walltrust
          </p>
          <Link href="/signup" className="btn-primary inline-block">
            Apply for a Card
          </Link>
        </div>
      </section>
    </>
  );
}
