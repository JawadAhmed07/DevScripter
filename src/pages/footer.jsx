import React from "react";
import { Button } from "@nextui-org/react"; // Import NextUI components as needed

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-4">Zera Creative LLC</h5>
            <p className="text-sm mb-4">
              Zera Creative LLC is a leading Digital Marketing Company based in US and PK that provides 100% results-focused organic marketing{" "}
              <a href="/seo-services/" className="text-blue-400 underline">
                professional SEO Services
              </a>{" "}
              for growing companies ready to ascend to the next level.
            </p>
            <p className="text-sm">
              <a href="tel:+92-309-2156445" className="text-blue-400 underline">Call Us: +92-309-2156445</a>
              <br />
              <a href="/cdn-cgi/l/email-protection#f49c9198989bb48e91869597869195809d8291da979b99" className="text-blue-400 underline">Email Us</a>
              <br />
              <a href="https://wa.me/923092156445" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">WhatsApp Us</a>
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="https://zeracreative.com/pricing/" className="text-blue-400 underline">Service Pricing</a>
              </li>
              <li>
                <a href="https://zeracreative.com/seo-services/packages/" className="text-blue-400 underline">Affordable SEO Packages</a>
              </li>
              <li>
                <a href="/blog/" className="text-blue-400 underline">Blog</a>
              </li>
              <li>
                <a href="https://zeracreative.com/news/" className="text-blue-400 underline">News</a>
              </li>
              <li>
                <a href="https://zeracreative.com/clients/" className="text-blue-400 underline">Our Clients</a>
              </li>
              <li>
                <a href="https://zeracreative.com/feedback/" className="text-blue-400 underline">Feedback Form</a>
              </li>
              <li>
                <a href="https://zeracreative.com/affiliated-partners/" className="text-blue-400 underline">Partners</a>
              </li>
              <li>
                <a href="https://zeracreative.com/pay/" className="text-blue-400 underline">How to Pay</a>
              </li>
              <li>
                <a href="https://zeracreative.com/hidden-feedback/" className="text-blue-400 underline">Disguised Feedback Form</a>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-4">Our Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="https://zeracreative.com/seo-services/karachi/" className="text-blue-400 underline">SEO Services in Karachi</a>
              </li>
              <li>
                <a href="https://zeracreative.com/seo-services/pakistan/" className="text-blue-400 underline">SEO Services in Pakistan</a>
              </li>
              <li>
                <a href="https://zeracreative.com/services/website/" className="text-blue-400 underline">Web Design &amp; Development</a>
              </li>
              <li>
                <a href="https://zeracreative.com/services/website/wordpress/" className="text-blue-400 underline">WordPress Website Development</a>
              </li>
              <li>
                <a href="https://zeracreative.com/seo-services/white-label/" className="text-blue-400 underline">White Label SEO Services</a>
              </li>
              <li>
                <a href="https://zeracreative.com/graphic-design/branding/" className="text-blue-400 underline">Logo Design &amp; Branding</a>
              </li>
              <li>
                <a href="https://zeracreative.com/services/website/maintenance/" className="text-blue-400 underline">Website Maintenance</a>
              </li>
              <li>
                <a href="https://zeracreative.com/services/website/redesign/" className="text-blue-400 underline">Website Revamp</a>
              </li>
              <li>
                <a href="https://zeracreative.com/services/social-media/" className="text-blue-400 underline">Social Media Management</a>
              </li>
            </ul>
          </div>

          {/* Logos Section */}
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-4">Our Logos</h5>
            <div className="space-y-4">
              <a href="https://www.google.com/search?q=zera+creative+agency" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://zeracreative.com/wp-content/uploads/2023/06/zera-creative-top-seo-company-google-business.png"
                  alt="Google Business"
                  className="w-40 h-auto"
                />
              </a>
              <a href="https://clutch.co/profile/zera-creative" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://zeracreative.com/wp-content/uploads/2024/06/clutch.png"
                  alt="Clutch"
                  className="w-40 h-auto"
                />
              </a>
              <a href="https://www.goodfirms.co/company/zera-creative" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://zeracreative.com/wp-content/uploads/2023/06/zera-creative-top-seo-company-goodfirms.png"
                  alt="GoodFirms"
                  className="w-40 h-auto"
                />
              </a>
              <img
                src="https://zeracreative.com/wp-content/uploads/2024/06/payment.webp"
                alt="Secure Payment Method"
                className="w-40 h-auto"
              />
              <img
                src="https://zeracreative.com/wp-content/uploads/2024/06/trustpilot-badge.png"
                alt="Trustpilot Badge"
                className="w-40 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 py-5">
        <div className="container mx-auto flex justify-between">
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/zeracreativepk" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/zeracreative" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" />
              </a>
            </li>
            {/* Add more social icons as needed */}
          </ul>
        </div>
          <p className="text-sm text-gray-300">© 2024 Zera Creative LLC. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
