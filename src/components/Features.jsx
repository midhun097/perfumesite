// src/components/Features.jsx
import { FaTruck, FaLock, FaHeadset } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaTruck className="text-2xl text-blue-700" />,
      title: "Fast & Reliable Delivery",
      desc: "Get your orders delivered on time, every time.",
    },
    {
      icon: <FaLock className="text-2xl text-blue-700" />,
      title: "Secure Payments",
      desc: "Shop with confidence using our encrypted gateway.",
    },
    {
      icon: <FaHeadset className="text-2xl text-blue-700" />,
      title: "24/7 Customer Support",
      desc: "We’re here to assist you anytime, anywhere.",
    },
  ];

  return (
    <section className="py-8 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-3">{feature.icon}</div>
          <h4 className="font-semibold text-lg text-gray-800 mb-1">{feature.title}</h4>
          <p className="text-sm text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
