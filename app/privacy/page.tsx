export default function Privacy() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[40vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            How we handle your fictional data
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Fictional Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <p className="text-blue-900 dark:text-blue-100">
              <strong>Note:</strong> This privacy policy applies to the fictional Walltrust Capital demo platform. No real personal data is collected or stored.
            </p>
          </div>

          {/* Sections */}
          <div className="card-premium p-8 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                On this fictional demonstration platform, we may simulate the collection of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-2">
                <li>Fictional user account information (name, email, phone)</li>
                <li>Simulated account and transaction data</li>
                <li>Demo login credentials</li>
                <li>Form submission data (for demonstration purposes)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">2. How We Use Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                On this fictional platform, simulated data is used to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-2">
                <li>Demonstrate application functionality</li>
                <li>Provide UI/UX demonstration features</li>
                <li>Showcase fintech application capabilities</li>
                <li>Display portfolio-relevant features</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">3. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400">
                This is a fictional demo platform. No real data is secured or stored persistently. Any information entered is purely for demonstration purposes and is not retained beyond the session.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fictional data may be reset or cleared at any time. No permanent records are maintained as this is a demonstration platform.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 dark:text-gray-400">
                This fictional platform does not integrate with real third-party financial services, payment processors, or data sharing services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-400">
                As this is a fictional demonstration platform:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-2 mt-2">
                <li>No real personal data is collected or stored</li>
                <li>No data retention or deletion rights apply</li>
                <li>No real privacy regulations are applicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">7. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For questions about this fictional platform:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-2">
                <li>Email: privacy@walltrust.com (fictional)</li>
                <li>This is a demo/portfolio project</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">Important Reminder</h3>
              <p className="text-yellow-900 dark:text-yellow-100">
                Walltrust Capital is a fictional platform created for educational and portfolio purposes. It does not collect, process, or store real personal data. No real privacy concerns apply to this demonstration website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
