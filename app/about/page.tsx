import { Users, Target, Globe, Shield } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Walltrust Capital</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We&apos;re reimagining banking for the digital age with innovative solutions that prioritize security, accessibility, and user experience.
          </p>
          <div className="inline-block bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-sm">
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold">Fictional Platform:</span> Walltrust Capital is created for educational and portfolio purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Our Foundation"
            title="Mission & Vision"
            description="Driven by a commitment to excellence in digital finance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold mb-4 text-walltrust-primary">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To democratize access to world-class banking services through innovative technology, making financial management secure, simple, and accessible to everyone.
              </p>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold mb-4 text-walltrust-secondary">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading digital banking platform trusted by millions worldwide, setting new standards for security, innovation, and customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="What Drives Us"
            title="Core Values"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Security First"
              description="Your data and transactions are protected with military-grade encryption"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Customer Centric"
              description="Every decision is made with you and your financial goals in mind"
            />
            <FeatureCard
              icon={<Target className="w-6 h-6" />}
              title="Innovation"
              description="Continuously evolving to bring you the latest financial technology"
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Global Reach"
              description="Connecting you to financial opportunities around the world"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Meet The Team"
            title="Leadership"
            description="Experienced professionals dedicated to your financial success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card-premium p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-walltrust-primary to-walltrust-secondary rounded-full mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-1">Team Member {i}</h3>
                <p className="text-walltrust-primary text-sm font-semibold mb-3">Position Title</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Experienced professional with expertise in digital finance and innovation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


