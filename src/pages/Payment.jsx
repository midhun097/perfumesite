import React from 'react';

const Payment = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Product Summary */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Product */}
        <div className="flex-1 bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold mb-4">Autograph eau de parfum 100ml for men</h2>
          <p className="text-sm text-gray-500 mb-2">Autograph | Rs 899 <span className="text-green-600 ml-2">81% off</span></p>
          <p className="text-xs text-gray-400">Delivery by Aug 22. 7-day return policy</p>
        </div>

        {/* Right - Price */}
        <div className="w-full lg:w-1/3 bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Price Details</h3>
          <div className="text-sm text-gray-600">
            <p>Price (1 item): Rs 899</p>
            <p>Discount: Rs 101</p>
            <p>Delivery: <span className="text-green-600">Free</span></p>
            <p className="font-bold mt-2">Total: Rs 899</p>
          </div>
        </div>
      </div>

      {/* Personal + Payment Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Personal Details */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Personal Details</h3>
          <button className="text-sm px-4 py-2 bg-gray-200 rounded mr-2">Home</button>
          <button className="text-sm px-4 py-2 bg-gray-200 rounded">Office</button>

          <div className="mt-4 text-sm text-gray-700">
            <p>Roshan Aison</p>
            <p>Apartment No 104, Emerald Heights, Kanth Road, Moradabad</p>
            <p>+91 9876543210</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold mb-2">Payment Methods</h3>
          <div className="space-y-2">
            {['Google Pay', 'Cash on Delivery', 'UPI', 'Card', 'Net Banking'].map(method => (
              <div key={method} className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <label>{method}</label>
              </div>
            ))}
          </div>
          <button
            onClick={() => window.location.href = '/payment-success'}
            className="mt-4 w-full bg-sky-900 text-white py-2 rounded"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
