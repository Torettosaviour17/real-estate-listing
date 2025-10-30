import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-white mb-4 inline-block"
            >
              LuxuryHomes
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in finding the perfect home. We connect
              buyers and sellers with exceptional properties and provide premium
              real estate services.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H8.078v-2.89h2.36V9.845c0-2.33 1.392-3.616 3.52-3.616.998 0 2.04.178 2.04.178v2.25h-1.15c-1.136 0-1.49.705-1.49 1.428v1.71h2.54l-.406 2.89h-2.134v6.987C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 19c7.5 0 11.6-6.1 11.6-11.4v-.5A8 8 0 0022 5.9a8.2 8.2 0 01-2.3.6 4 4 0 001.8-2.2 8.2 8.2 0 01-2.6 1A4 4 0 0012 8.5a11.3 11.3 0 01-8.2-4.2 4 4 0 001.2 5.3A4 4 0 012 9v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.7A8.1 8.1 0 012 18a11.3 11.3 0 006 1.7" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-2.3a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Palm Avenue, Lagos</li>
              <li>+234 800 000 0000</li>
              <li>support@luxuryhomes.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LuxuryHomes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
