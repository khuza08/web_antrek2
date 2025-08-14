
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                SMK Antartika 2 Sidoarjo
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Sekolahnya sang Juara
              </p>
            </div>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">University Park Campus</h3>
                <a href="#" className="text-sm text-blue-800 dark:text-blue-400 hover:underline">(Map)</a>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">213-740-2311</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Health Sciences Campus</h3>
                <a href="#" className="text-sm text-blue-800 dark:text-blue-400 hover:underline">(Map)</a>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">323-442-2000</p>
              </div>
              
              <div className="space-y-1">
                <a href="#" className="block text-sm text-blue-800 dark:text-blue-400 underline hover:text-blue-900 dark:hover:text-blue-300">Tommy Cam</a>
                <a href="#" className="block text-sm text-blue-800 dark:text-blue-400 underline hover:text-blue-900 dark:hover:text-blue-300">Hecuba Cam</a>
              </div>
            </div>
          </div>

          {/* About USC Column */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">About USC</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/office-president" className="text-blue-800 dark:text-blue-400 hover:underline">Office of the President</a></li>
              <li><a href="/office-provost" className="text-blue-800 dark:text-blue-400 hover:underline">Office of the Provost</a></li>
              <li><a href="/policies" className="text-blue-800 dark:text-blue-400 hover:underline">Policies and Core Documents</a></li>
              <li><a href="/sustainability" className="text-blue-800 dark:text-blue-400 hover:underline">Sustainability</a></li>
              <li><a href="/economic-impact" className="text-blue-800 dark:text-blue-400 hover:underline">Economic Impact</a></li>
            </ul>
          </div>

          {/* Patient Care Column */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">Patient Care</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/student-health" className="text-blue-800 dark:text-blue-400 hover:underline">USC Student Health</a></li>
              <li><a href="/keck-medicine" className="text-blue-800 dark:text-blue-400 hover:underline">Keck Medicine of USC</a></li>
              <li><a href="/appointment" className="text-blue-800 dark:text-blue-400 hover:underline">Request an Appointment</a></li>
              <li><a href="/medical-services" className="text-blue-800 dark:text-blue-400 hover:underline">Medical Services and Programs</a></li>
              <li><a href="/find-provider" className="text-blue-800 dark:text-blue-400 hover:underline">Find a Provider</a></li>
              <li><a href="/hospital-locations" className="text-blue-800 dark:text-blue-400 hover:underline">Hospital and Clinic Locations</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/campus-events" className="text-blue-800 dark:text-blue-400 hover:underline">Campus Events</a></li>
              <li><a href="/campus-safety" className="text-blue-800 dark:text-blue-400 hover:underline">Campus Safety</a></li>
              <li><a href="/careers" className="text-blue-800 dark:text-blue-400 hover:underline">Careers at USC</a></li>
              <li><a href="/commitment-change" className="text-blue-800 dark:text-blue-400 hover:underline">Commitment to Change</a></li>
              <li><a href="/campus-access" className="text-blue-800 dark:text-blue-400 hover:underline">How to Access Campus</a></li>
              <li><a href="/pressroom" className="text-blue-800 dark:text-blue-400 hover:underline">Pressroom</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start space-x-4 mb-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/huzawastaken"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75Zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Zm5.25-.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-red-700 hover:text-red-800 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Bottom Section with Copyright and Links */}
        <div className="border-t border-gray-300 dark:border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Copyright © {new Date().getFullYear()} University of Southern California
            </p>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/privacy" className="text-blue-800 dark:text-blue-400 hover:underline">Privacy Notice</a>
              <a href="/non-discrimination" className="text-blue-800 dark:text-blue-400 hover:underline">Notice of Non-Discrimination</a>
              <a href="/accessibility" className="text-blue-800 dark:text-blue-400 hover:underline">Digital Accessibility</a>
              <a href="/smoke-free" className="text-blue-800 dark:text-blue-400 hover:underline">Smoke-Free Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}