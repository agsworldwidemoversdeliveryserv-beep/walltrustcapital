import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-walltrust-card dark:bg-walltrust-card-dark border-t border-walltrust-border dark:border-walltrust-border-dark mt-20">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-walltrust-primary to-walltrust-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <span className="font-bold text-lg text-walltrust-primary">Walltrust</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Premium digital banking solutions for the modern world.
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/personal-banking" className="hover:text-walltrust-primary transition-colors">Personal Banking</Link></li>
                <li><Link href="/business-banking" className="hover:text-walltrust-primary transition-colors">Business Banking</Link></li>
                <li><Link href="/cards" className="hover:text-walltrust-primary transition-colors">Cards</Link></li>
                <li><Link href="/digital-banking" className="hover:text-walltrust-primary transition-colors">Digital Banking</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-walltrust-primary transition-colors">About Us</Link></li>
                <li><Link href="/security" className="hover:text-walltrust-primary transition-colors">Security</Link></li>
                <li><Link href="/contact" className="hover:text-walltrust-primary transition-colors">Contact</Link></li>
                <li><Link href="/terms" className="hover:text-walltrust-primary transition-colors">Terms & Disclaimer</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>support@walltrust.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>1-800-WALLTRUST</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>123 Finance Street<br/>New York, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-walltrust-border dark:border-walltrust-border-dark py-8">
            {/* Disclaimer */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <p className="text-xs md:text-sm text-gray-800 dark:text-gray-200">
                <span className="font-semibold">⚠️ Important Disclaimer:</span> Walltrust Capital is a <strong>fictional digital banking platform</strong> created for software development, educational, and portfolio demonstration purposes only. It is <strong>not a licensed financial institution</strong> and does not provide real banking services, process real money, or conduct actual financial transactions. No real funds should be used with this platform. For more information, please see our <Link href="/terms" className="text-walltrust-primary hover:underline">Terms & Disclaimer</Link> page.
              </p>
            </div>

            {/* Bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <p>&copy; {currentYear} Walltrust Capital. All rights reserved. | For Portfolio & Educational Use Only</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link href="/terms" className="hover:text-walltrust-primary transition-colors">Terms</Link>
                <Link href="/privacy" className="hover:text-walltrust-primary transition-colors">Privacy</Link>
                <a href="#" className="hover:text-walltrust-primary transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
