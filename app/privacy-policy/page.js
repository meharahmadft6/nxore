import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Nxore - Digital Solutions & Web Development",
  description:
    "Learn how Nxore protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and your rights as our client.",
  keywords:
    "Nxore privacy policy, data protection, GDPR compliance, privacy rights, data security, personal information, web development privacy, digital solutions privacy",
  openGraph: {
    title: "Privacy Policy | Nxore - Digital Solutions",
    description:
      "Comprehensive privacy policy detailing how Nxore handles and protects your personal data and information.",
    url: "https://nxore.info/privacy-policy",
  },
  alternates: {
    canonical: "https://nxore.info/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Business information (Company name, website, project requirements)",
        "Technical data (IP address, browser type, device information)",
        "Communication records (emails, chat logs, project discussions)",
        "Usage data (website interactions, pages visited, time spent)",
      ],
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-600" />,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our web development and digital services",
        "Communicate with you about projects, updates, and support",
        "Process payments and manage client accounts",
        "Improve our services and develop new features",
        "Send marketing communications (with your consent)",
        "Comply with legal obligations and protect our rights",
      ],
    },
    {
      icon: <Lock className="w-6 h-6 text-green-600" />,
      title: "Data Protection & Security",
      content: [
        "Industry-standard encryption for data transmission and storage",
        "Regular security audits and vulnerability assessments",
        "Limited access to personal data on a need-to-know basis",
        "Secure hosting infrastructure with 99.9% uptime guarantee",
        "Regular backups and disaster recovery procedures",
        "Staff training on data protection and privacy best practices",
      ],
    },
    {
      icon: <UserCheck className="w-6 h-6 text-orange-600" />,
      title: "Your Rights",
      content: [
        "Access: Request copies of your personal data",
        "Rectification: Request correction of inaccurate information",
        "Erasure: Request deletion of your personal data",
        "Portability: Request transfer of your data to another service",
        "Restriction: Request limitation of processing your data",
        "Objection: Object to processing of your personal data",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your privacy is important to us. This policy explains how Nxore
            collects, uses, and protects your personal information when you use
            our digital services.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg inline-block">
            <p className="text-sm text-blue-800">
              <strong>Last Updated:</strong> July 26, 2025 |{" "}
              <strong>Effective Date:</strong> July 26, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Nxore. We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website <strong>nxore.info</strong>{" "}
              or use our digital services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of
              information in accordance with this policy. We will not use or
              share your information with anyone except as described in this
              Privacy Policy.
            </p>
          </div>

          {/* Information Sections */}
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-3xl font-bold text-gray-900 ml-3">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Data Sharing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Data Sharing & Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Service Providers
                </h3>
                <p className="text-gray-700 text-sm">
                  Trusted third-party services that help us operate our business
                  (hosting, analytics, payment processing)
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Legal Requirements
                </h3>
                <p className="text-gray-700 text-sm">
                  When required by law, court order, or to protect our rights
                  and safety
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Business Transfers
                </h3>
                <p className="text-gray-700 text-sm">
                  In connection with a merger, acquisition, or sale of assets
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  With Your Consent
                </h3>
                <p className="text-gray-700 text-sm">
                  When you explicitly agree to share information for specific
                  purposes
                </p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cookies & Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience on our website:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Essential Cookies
                </h3>
                <p className="text-gray-700 text-sm">
                  Required for basic website functionality and security
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Analytics Cookies
                </h3>
                <p className="text-gray-700 text-sm">
                  Help us understand how visitors interact with our website
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Marketing Cookies
                </h3>
                <p className="text-gray-700 text-sm">
                  Used to show relevant advertisements (with your consent)
                </p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only as long as necessary for
              the purposes outlined in this Privacy Policy:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Client Data:</strong> 7 years after project
                    completion (for legal and business purposes)
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Marketing Data:</strong> Until you unsubscribe or
                    withdraw consent
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Website Analytics:</strong> 26 months (Google
                    Analytics standard)
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Support Records:</strong> 3 years for quality
                    assurance
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Updates */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold">
                Contact Us & Policy Updates
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Questions About This Policy?
                </h3>
                <p className="mb-4 opacity-90">
                  If you have any questions about this Privacy Policy or how we
                  handle your data, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>nxore.digitalsolutions@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+92-339-4126260</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Policy Updates</h3>
                <p className="mb-4 opacity-90">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by:
                </p>
                <ul className="space-y-1 opacity-90">
                  <li>• Posting the new policy on this page</li>
                  <li>• Updating the Last Updated date</li>
                  <li>• Sending email notifications for major changes</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center opacity-90">
                Your continued use of our services after any modifications
                indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg"
            >
              Have Questions? Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
