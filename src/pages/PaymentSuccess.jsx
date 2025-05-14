import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 shadow-lg rounded text-center max-w-md">
        <div className="text-green-500 text-5xl mb-4">✔</div>
        <h2 className="text-xl font-bold mb-2">Thank You for Ordering!</h2>
        <p className="text-sm text-gray-600 mb-6">Your order has been successfully placed. We're preparing it for shipment.</p>
        <div className="flex justify-center gap-4">
          <a href="/" className="bg-gray-200 px-4 py-2 rounded">Back to Home</a>
          <a href="/orders" className="bg-sky-900 text-white px-4 py-2 rounded">Track Order</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
