// src/components/Footer.jsx
function Footer() {
    return (
<footer className="bg-teal-200 px-6 py-8">
        <div className="flex justify-between flex-wrap gap-6">
          <div>
            <h3 className="text-xl font-bold">Fragranzia</h3>
            <ul className="mt-4 space-y-1">
              <li>Home</li>
              <li>Products</li>
              <li>Gifting</li>
              <li>About</li>
              <li>Profile</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-1">
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
              <li>FAQs</li>
              <li>Customer service</li>
            </ul>
          </div>
          <div>
            <p className="mb-2">tfrafurniture@gmail.com</p>
            <p className="mb-4">+91 9876543210</p>
            <div className="flex gap-2">
              <span>📷</span><span>📘</span><span>📹</span><span>📸</span><span>🔗</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-center mt-4 border-t pt-2">
          Web Accessibility | Terms of Use | Privacy Statement | Contact Us <br />
          © 2024 Fragranzia Company. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  