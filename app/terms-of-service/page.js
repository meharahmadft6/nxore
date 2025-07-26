import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FileText,
  Users,
  CreditCard,
  Shield,
  AlertTriangle,
  Gavel,
  Clock,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | Nxore - Web Development & Digital Solutions",
  description:
    "Legal terms governing Nxore's web development, mobile apps, and digital marketing services. Understand payment terms, intellectual property rights, and client responsibilities.",
  keywords: [
    "Nxore terms of service",
    "web development contract",
    "digital agency agreement",
    "MERN stack development terms",
    "Next.js development contract",
    "Pakistan web development terms",
    "software service agreement",
    "digital solutions legal terms",
  ].join(", "),
  openGraph: {
    title: "Terms of Service | Nxore Digital Solutions",
    description:
      "Legal agreement for Nxore's professional web development and digital marketing services in Pakistan.",
    url: "https://nxore.info/terms-of-service",
    images: [
      {
        url: "https://nxore.info/nxore.png",
        width: 1200,
        height: 630,
        alt: "Nxore Terms of Service - Web Development Agreement",
      },
    ],
  },
  alternates: {
    canonical: "https://nxore.info/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  const sections = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Service Agreement",
      content: [
        "Professional web development and digital solutions services",
        "Custom software development and mobile applications",
        "Digital marketing and SEO optimization services",
        "UI/UX design and branding solutions",
        "Ongoing maintenance and technical support",
        "Consultation and project management services",
      ],
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-600" />,
      title: "Payment Terms",
      content: [
        "50% advance payment required to start any project",
        "Remaining 50% due upon project completion and delivery",
        "Monthly payments for ongoing maintenance services",
        "Late payment fees of 2% per month on overdue amounts",
        "All payments in PKR (Pakistani Rupees) or USD",
        "Refunds subject to project completion percentage",
      ],
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Project Timeline",
      content: [
        "Timeline estimates provided during project consultation",
        "Delays due to client feedback or changes may extend timeline",
        "Rush projects may incur additional charges (25-50%)",
        "Client must provide required materials within agreed timeframe",
        "Testing and revision phases included in timeline",
        "Final delivery within 7 days of client approval",
      ],
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Intellectual Property",
      content: [
        "Client owns final delivered work upon full payment",
        "Nxore retains rights to development methodologies and frameworks",
        "Client must provide legal rights to all provided materials",
        "Third-party licenses and tools remain property of respective owners",
        "Nxore may showcase completed projects in portfolio",
        "Client grants permission to use project as case study",
      ],
    },
  ];

  const limitations = [
    {
      title: "Service Availability",
      description:
        "99.9% uptime guarantee for hosted services, planned maintenance windows excluded",
    },
    {
      title: "Data Backup",
      description:
        "Regular backups provided, but client responsible for maintaining own backups",
    },
    {
      title: "Third-party Services",
      description:
        "Integration issues with third-party services beyond our control not covered",
    },
    {
      title: "Browser Compatibility",
      description:
        "Support for current and previous versions of major browsers only",
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
              <Gavel className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            These terms govern your use of Nxore digital services. Please read
            carefully to understand your rights and responsibilities as our
            valued client.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg inline-block">
            <p className="text-sm text-green-800">
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
              Agreement Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Nxore Terms of Service. By engaging our services or
              using our website <strong>nxore.info</strong>, you agree to be
              bound by these terms. This agreement is between you Client and
              Nxore.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-blue-800 text-sm">
                  <strong>Important:</strong> These terms constitute a legally
                  binding agreement. If you do not agree to these terms, please
                  do not use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Service Sections */}
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

          {/* Client Responsibilities */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900 ml-3">
                Client Responsibilities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Content & Materials
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Provide all necessary content, images, and materials in
                    required formats and within agreed timelines
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Timely Feedback
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Provide feedback and approvals within 5 business days to
                    avoid project delays
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Payment Schedule
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Make payments according to agreed schedule to ensure
                    uninterrupted service
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Legal Compliance
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Ensure all provided content is legal, licensed, and does not
                    violate copyright laws
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Communication
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Maintain open communication and respond to project-related
                    queries promptly
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Testing & Review
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Thoroughly test delivered work and report issues within the
                    review period
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Limitations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <h2 className="text-3xl font-bold text-gray-900 ml-3">
                Service Limitations
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {limitations.map((limitation, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {limitation.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {limitation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty & Support */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Warranty & Support
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  30-Day Warranty
                </h3>
                <p className="text-gray-700 text-sm">
                  Free bug fixes and minor adjustments for 30 days after project
                  delivery
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-700 text-sm">
                  Emergency support available for critical issues affecting live
                  websites
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Security Updates
                </h3>
                <p className="text-gray-700 text-sm">
                  Regular security updates and patches for maintained websites
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation & Refunds */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cancellation & Refund Policy
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Project Cancellation
                </h3>
                <p className="text-gray-700 mb-2">
                  Client may cancel project with 7 days written notice. Refund
                  calculated based on work completed:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 0-25% complete: 75% refund of advance payment</li>
                  <li>• 26-50% complete: 50% refund of advance payment</li>
                  <li>• 51-75% complete: 25% refund of advance payment</li>
                  <li>• 76%+ complete: No refund available</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Service Termination
                </h3>
                <p className="text-gray-700">
                  Either party may terminate ongoing services with 30 days
                  written notice. Final invoice due within 15 days of
                  termination.
                </p>
              </div>
            </div>
          </div>

          {/* Liability & Disputes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Liability & Dispute Resolution
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dispute Resolution
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Good faith negotiation as first step
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Mediation through neutral third party
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Arbitration under Pakistani law if needed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Governing Law & Jurisdiction
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service are governed by the laws of Pakistan. Any
                disputes arising from this agreement shall be subject to the
                exclusive jurisdiction of the courts in Mingora, Khyber
                Pakhtunkhwa, Pakistan.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <Gavel className="w-4 h-4 mr-2" />
                <span>
                  All legal proceedings must be conducted in English or Urdu
                  language
                </span>
              </div>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting on our website.
              We will notify clients of significant changes via:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Website Notice
                </h3>
                <p className="text-gray-700 text-sm">
                  Updated terms posted on website
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Email Notification
                </h3>
                <p className="text-gray-700 text-sm">
                  Direct email to registered clients
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <AlertTriangle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Project Notice
                </h3>
                <p className="text-gray-700 text-sm">
                  Notification during active projects
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Our team is here to clarify any questions about our terms of
                service and help you understand your agreement with Nxore.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Legal Team</h3>
                  <p className="text-sm opacity-90">
                    nxore.digitalsolutions@gmail.com
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Client Support</h3>
                  <p className="text-sm opacity-90">
                    nxore.digitalsolutions@gmail.com
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Billing</h3>
                  <p className="text-sm opacity-90">
                    nxore.digitalsolutions@gmail.com
                  </p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-center opacity-90 text-sm">
                  By continuing to use our services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms of
                  Service.
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Acknowledgment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By using Nxore services, you acknowledge that you have read
                these Terms of Service, understand them, and agree to be bound
                by them. If you do not agree to these terms, you must not use
                our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Start Your Project
                </a>
                <a
                  href="/privacy-policy"
                  className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  View Privacy Policy
                </a>
              </div>
            </div>
          </div>
          {/* Liability & Disputes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Liability & Dispute Resolution
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Limitation of Liability
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Total liability limited to project cost
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      No liability for indirect or consequential damages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Force majeure events exclude liability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Not liable for third-party service issues
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dispute Resolution
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Good faith negotiation as first step
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Mediation through neutral third party
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Arbitration under Pakistani law if needed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Each party bears own legal costs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex">
                <AlertTriangle className="flex-shrink-0 h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Any legal action must be
                    commenced within one (1) year after the claim or cause of
                    action arises, or such claim or cause of action is barred.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Liability & Disputes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Liability & Dispute Resolution
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Limitation of Liability
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Total liability limited to project cost
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      No liability for indirect or consequential damages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Force majeure events exclude liability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Not liable for third-party service issues
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Dispute Resolution
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Good faith negotiation as first step
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Mediation through neutral third party
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Arbitration under Pakistani law if needed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">
                      Each party bears own legal costs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex">
                <AlertTriangle className="flex-shrink-0 h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Any legal action must be
                    commenced within one (1) year after the claim or cause of
                    action arises, or such claim or cause of action is barred.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Liability & Disputes */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Liability & Dispute Resolution
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Limitation of Liability
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Total liability limited to project cost
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    No liability for indirect or consequential damages
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Force majeure events exclude liability
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Not liable for third-party service issues
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dispute Resolution
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Good faith negotiation as first step
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Mediation through neutral third party
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Arbitration under Pakistani law if needed
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">
                    Each party bears own legal costs
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex">
              <AlertTriangle className="flex-shrink-0 h-5 w-5 text-yellow-600 mr-3" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Any legal action must be commenced
                  within one (1) year after the claim or cause of action arises,
                  or such claim or cause of action is barred.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
