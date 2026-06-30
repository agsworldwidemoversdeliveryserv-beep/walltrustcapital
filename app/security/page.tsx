import { Lock, Shield, Eye, Fingerprint, AlertTriangle, CheckCircle } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";

export default function Security() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Security & Privacy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your trust is our priority. We employ military-grade security to protect your data.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Protection Layers"
            title="Enterprise-Grade Security"
            description="Multiple layers of protection for your peace of mind"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Lock size={24} />}
              title="End-to-End Encryption"
              description="All data transmitted with AES-256 encryption"
              delay={1}
            />
            <FeatureCard
              icon={<Fingerprint size={24} />}
              title="Biometric Authentication"
              description="Face ID and fingerprint recognition for secure access"
              delay={2}
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Fraud Detection"
              description="AI-powered system detects and prevents fraudulent activity"
              delay={3}
            />
            <FeatureCard
              icon={<Eye size={24} />}
              title="Real-Time Monitoring"
              description="24/7 monitoring of your accounts for suspicious activity"
              delay={4}
            />
            <FeatureCard
              icon={<CheckCircle size={24} />}
              title="Zero Liability"
              description="You're protected against unauthorized transactions"
              delay={5}
            />
            <FeatureCard
              icon={<AlertTriangle size={24} />}
              title="Instant Alerts"
              description="Get notified immediately of any account activity"
              delay={6}
            />
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Compliance & Standards" centered={false} />

          <div className="space-y-6">
            {[
              { standard: "ISO 27001", description: "Information security management system certification" },
              { standard: "SOC 2 Type II", description: "Security, availability, and confidentiality standards" },
              { standard: "PCI DSS", description: "Payment Card Industry Data Security Standard compliance" },
              { standard: "GDPR", description: "General Data Protection Regulation compliant" },
              { standard: "CCPA", description: "California Consumer Privacy Act compliant" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-4 border-l-4 border-walltrust-primary">
                <CheckCircle className="w-6 h-6 text-walltrust-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{item.standard}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Security Best Practices" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Never Share Your Password", tip: "Keep your password unique and change it regularly" },
              { title: "Enable Two-Factor Auth", tip: "Add an extra layer of protection to your account" },
              { title: "Check Your Accounts", tip: "Review transactions regularly for suspicious activity" },
              { title: "Use Secure Networks", tip: "Avoid public WiFi when accessing sensitive information" },
              { title: "Update Your Device", tip: "Keep your phone or computer software up to date" },
              { title: "Report Fraud Immediately", tip: "Contact us right away if you notice anything unusual" },
            ].map((item, i) => (
              <div key={i} className="card-premium p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
