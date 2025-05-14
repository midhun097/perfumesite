import React from "react";
import { FaTruck, FaLock, FaHeadset } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function AboutPage() {
  return (
    <div className="font-sans">
      
      <div className="bg-white py-4 px-6 shadow-md flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">Fragranzia</div>
        <nav className="flex gap-6 text-gray-800 font-medium">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Gifting</a>
          <a href="#" className="text-blue-900">About</a>
        </nav>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search Here" className="border rounded-full px-4 py-1" />
          <FiShoppingCart size={20} />
          <FiUser size={20} />
        </div>
      </div>

      <div className="px-6 py-10 md:flex gap-10 items-start">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">About Fragranzia</h1>
          <p className="text-sm text-gray-700 mb-4">Home &gt; About</p>
          <p className="mb-4">At Fragranzia, we believe that a perfume is more than just a scent—it’s a story, an art, and a science combined to create memories that linger. Our journey began with a vision to craft exquisite fragrances that capture the essence of individuality and elevate every moment into something timeless.</p>
          <p className="mb-4">Guided by passion and precision, we source the finest ingredients from around the world to create perfumes that resonate with authenticity and luxury. Each bottle is a masterpiece, meticulously crafted to deliver an unparalleled sensory experience.</p>
          <p className="mb-4">Our commitment goes beyond creating fragrances. We aim to inspire confidence, evoke emotions, and celebrate uniqueness through every drop we produce. Fragranzia isn’t just a brand—it’s a celebration of you, your style, and your moments.</p>
          <p>With a legacy built on quality, artistry, and innovation, we invite you to explore our collection and find a scent that speaks your story.</p>
        </div>
        <div className="md:w-1/3 flex flex-col gap-4 mt-6 md:mt-0">
          <img src="https://c.stocksy.com/a/9EaM00/z9/5382477.jpg" alt="Perfume 1" className="rounded-tl-[50px] rounded-br-[50px]" />
          <img src="https://www.fragrancex.com/blog/wp-content/uploads/2020/03/areas-to-apply-fragrance-hero-1.jpg" alt="Perfume 2" className="rounded-tl-[50px] rounded-br-[50px]" />
        </div>
      </div>

     
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
    </div>
  );
}
