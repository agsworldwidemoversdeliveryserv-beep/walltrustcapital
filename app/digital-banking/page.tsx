import { Smartphone, Wallet, Globe, Lock, Zap, Bell } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";

export default function DigitalBanking() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Digital Banking</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Banking at your fingertips, anytime, anywhere
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Digital Capabilities"
            title="Banking Reimagined"
            description="Experience seamless digital banking with cutting-edge technology"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Smartphone size={24} />}
              title="Mobile App"
              description="Full-featured banking app available on iOS and Android with offline access"
              delay={1}
            />
            <FeatureCard
              icon={<Wallet size={24} />}
              title="Digital Wallet"
              description="Store cards securely and make contactless payments instantly"
              delay={2}
            />
            <FeatureCard
              icon={<Globe size={24} />}
              title="International Transfers"
              description="Send money globally with real exchange rates and low fees"
              delay={3}
            />
            <FeatureCard
              icon={<Lock size={24} />}
              title="Biometric Security"
              description="Face ID and fingerprint authentication for maximum security"
              delay={4}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Instant Payments"
              description="Move money between accounts in real-time"
              delay={5}
            />
            <FeatureCard
              icon={<Bell size={24} />}
              title="Smart Notifications"
              description="Stay updated with intelligent alerts about your accounts"
              delay={6}
            />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Built with Modern Technology" centered={false} />

          <div className="space-y-6">
            {[
              { title: "Cloud Infrastructure", description: "Built on secure, scalable cloud platforms with 99.99% uptime guarantee" },
              { title: "AI-Powered Analytics", description: "Machine learning algorithms provide personalized insights and recommendations" },
              { title: "Real-Time Processing", description: "Transactions processed instantly with advanced blockchain verification" },
              { title: "Zero Trust Security", description: "Every transaction verified with multi-layer authentication and encryption" },
            ].map((item, i) => (
              <div key={i} className="card-premium p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Modern Banking</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Download our app and start your digital banking journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Download iOS</button>
            <button className="btn-secondary">Download Android</button>
          </div>
        </div>
      </section>
    </>
  );
}
