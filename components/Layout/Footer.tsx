export default function Footer() {
    return (
      <footer className="bg-[#1E0A3C] text-white text-sm py-10">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Use 4Kiddos */}
          <div>
            <h3 className="font-bold mb-3">Use 4Kiddos</h3>
            <ul className="space-y-2">
              {[
                "Create Events", "Pricing", "Event Marketing Platform", "4Kiddos Mobile Ticket App",
                "4Kiddos Check-In App", "4Kiddos App Marketplace", "Event Registration Software",
                "Community Guidelines", "FAQs", "Sitemap"
              ].map(item => (<li key={item}><a href="#" className="hover:underline">{item}</a></li>))}
            </ul>
          </div>
  
          {/* Plan Events */}
          <div>
            <h3 className="font-bold mb-3">Plan Events</h3>
            <ul className="space-y-2">
              {[
                "Sell Tickets Online", "Event Planning", "Sell Concert Tickets Online", "Event Payment System",
                "Solutions for Professional Services", "Event Management Software", "Halloween Party Planning",
                "Virtual Events Platform", "QR Codes for Event Check-In", "Post your event online"
              ].map(item => (<li key={item}><a href="#" className="hover:underline">{item}</a></li>))}
            </ul>
          </div>
  
          {/* Find Events */}
          <div>
            <h3 className="font-bold mb-3">Find Events</h3>
            <ul className="space-y-2">
              {[
                "New Orleans Food & Drink Events", "San Francisco Holiday Events", "Tulum Music Events",
                "Denver Hobby Events", "Atlanta Pop Music Events", "New York Events", "Chicago Events",
                "Events in Dallas Today", "Los Angeles Events", "Washington Events"
              ].map(item => (<li key={item}><a href="#" className="hover:underline">{item}</a></li>))}
            </ul>
          </div>
  
          {/* Connect With Us */}
          <div>
            <h3 className="font-bold mb-3">Connect With Us</h3>
            <ul className="space-y-2">
              {["Contact Support", "Contact Sales", "X", "Facebook", "LinkedIn", "Instagram", "TikTok"].map(item => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="container mx-auto px-6 lg:px-20 mt-10 border-t border-gray-600 pt-6 text-center md:text-left">
          <p className="text-gray-400">&copy; 2025 4Kiddos</p>
          <div className="mt-3 flex flex-wrap justify-center md:justify-start space-x-4 text-gray-400">
            {["About", "Blog", "Help", "Careers", "Press", "Impact", "Investors", "Security", "Developers",
              "Status", "Terms", "Privacy", "Accessibility", "Cookies", "Manage Cookie Preferences"].map(item => (
              <a key={item} href="#" className="hover:underline">{item}</a>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  