import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 shadow-inner">
      {/* Accent Gradient Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 mb-8" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-blue-700">Nxore</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              We help businesses create stunning websites, powerful
              applications, and digital solutions that drive growth and
              engagement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nxore.digitalsolutions?igsh=MTdjMnF4d2ExY3hldw%3D%3D&utm_source=qr "
                className="text-pink-500 hover:text-pink-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm4.88-.88a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/16njMkKtge/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.402.597 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.315h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.402 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://my-next-jsportfolio-z2gq.vercel.app/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/web-development"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/mobile-apps"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-marketing"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/ui-ux-design"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024-2025 Nxore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
