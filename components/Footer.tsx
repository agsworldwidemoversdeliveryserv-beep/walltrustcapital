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
                <li><Link href="/terms" className="hover:text-walltrust-primary transition-colors">Terms & Conditions</Link></li>
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
            {/* Legal Notice */}
            <div className="bg-gradient-to-r from-walltrust-primary/5 to-walltrust-secondary/5 dark:from-walltrust-primary/10 dark:to-walltrust-secondary/10 border border-walltrust-primary/20 dark:border-walltrust-primary/30 rounded-lg p-6 mb-8">
              <p className="text-xs md:text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                Walltrust Capital is committed to providing secure and innovative financial solutions. Products and services are subject to applicable laws, eligibility requirements, and our Terms & Conditions. Please review all disclosures carefully before making financial decisions.
              </p>
            </div>

            {/* Bottom */}
            <div className="space-y-4 md:space-y-0 md:flex md:flex-col md:items-center">
              <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-600 dark:text-gray-400 w-full gap-4">
                <p>&copy; {currentYear} Walltrust Capital. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <Link href="/privacy" className="hover:text-walltrust-primary transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-walltrust-primary transition-colors">Terms & Conditions</Link>
                  <Link href="/cookies" className="hover:text-walltrust-primary transition-colors">Cookie Policy</Link>
                  <Link href="/security" className="hover:text-walltrust-primary transition-colors">Security</Link>
                  <Link href="/contact" className="hover:text-walltrust-primary transition-colors">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
