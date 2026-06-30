import Link from "next/link";

export default function Terms() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[40vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Disclaimer</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Important information about Walltrust Capital
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Critical Disclaimer */}
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-red-900 dark:text-red-100 mb-4">⚠️ CRITICAL DISCLAIMER</h2>
            <div className="text-red-900 dark:text-red-100 space-y-4 text-base">
              <p>
                <strong>Walltrust Capital is a FICTIONAL digital banking platform</strong> created exclusively for software development, educational demonstration, UI/UX portfolio purposes, and software engineering practice.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Walltrust Capital is NOT a licensed, regulated, or real financial institution</li>
                <li>Walltrust Capital does NOT provide real banking services</li>
                <li>Walltrust Capital does NOT process real money or actual financial transactions</li>
                <li>Walltrust Capital does NOT accept real deposits or provide real credit/loans</li>
                <li>NO real funds should be used with this platform</li>
                <li>All data displayed is fictional and for demonstration purposes only</li>
              </ul>
              <p>
                This platform is designed solely to showcase web development skills, modern UI/UX design, and fintech application architecture. Any resemblance to real banking services is purely coincidental and intentional for educational purposes.
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="card-premium p-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">1. Acknowledgment of Fictional Nature</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                By accessing and using Walltrust Capital, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-2">
                <li>This is a fictional platform created for educational and portfolio purposes</li>
                <li>No real financial services are offered or provided</li>
                <li>All data, accounts, and transactions are simulated</li>
                <li>You understand this is a demonstration website</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">2. No Real Financial Institution</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Walltrust Capital is not authorized to conduct any financial business. We do not offer real checking accounts, savings accounts, credit cards, loans, investments, or any other actual financial products or services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">3. No Real Transactions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Any transactions, transfers, payments, or financial activities on this platform are simulated and fictional. No real money is moved, no real payments are processed, and no real financial obligations are created.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">4. Educational Use Only</h3>
              <p className="text-gray-600 dark:text-gray-400">
                This platform is intended for use by software developers, designers, and students to learn about fintech application development, modern web technologies, user interface design, and financial application architecture.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">5. Portfolio & Demonstration Purposes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Walltrust Capital is used by its creator to demonstrate:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-2 mt-2">
                <li>Full-stack web development capabilities</li>
                <li>Modern responsive design (mobile-first approach)</li>
                <li>Professional UI/UX design patterns</li>
                <li>Next.js and React expertise</li>
                <li>Tailwind CSS proficiency</li>
                <li>TypeScript development</li>
                <li>Complex application architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">6. No Regulatory Oversight</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Walltrust Capital is not regulated by the Federal Reserve, FDIC, SEC, OCC, or any other financial regulatory body. We do not comply with banking regulations because we are not a bank.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">7. Fictional Data</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All user accounts, transaction histories, balances, customer data, and information displayed on this platform are completely fictional and generated for demonstration purposes. Any resemblance to real people, accounts, or transactions is purely coincidental.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">8. No Liability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Walltrust Capital creator assumes no liability for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-2 mt-2">
                <li>Any misunderstanding about the fictional nature of this platform</li>
                <li>Any attempt to use this platform as a real financial service</li>
                <li>Any loss or damage resulting from such misunderstanding</li>
                <li>Technical issues or service interruptions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">9. Intellectual Property</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All code, design, content, and intellectual property associated with Walltrust Capital are the property of the creator and may be used for portfolio demonstration purposes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">10. Acceptance of Terms</h3>
              <p className="text-gray-600 dark:text-gray-400">
                By using this platform, you fully understand and accept that Walltrust Capital is a fictional educational and portfolio demonstration project, not a real financial institution or service provider.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2">For Real Banking Services</h4>
              <p className="text-gray-700 dark:text-gray-300">
                If you are seeking real banking, financial, investment, or payment services, please contact a legitimate, regulated financial institution in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="section-padding bg-walltrust-card dark:bg-walltrust-card-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Questions or Concerns?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            If you have any questions about the fictional nature of this platform or how it&apos;s being used, please don&apos;t hesitate to reach out.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
