import React from "react";
import { XCircle } from "lucide-react";

const PaymentFailuremodel = ({ onRetry, onBackHome }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <XCircle className="text-red-500 mx-auto w-16 h-16 mb-4" />
        <h2 className="text-xl font-semibold text-gray-800">Your order has failed!</h2>
        <p className="text-sm text-gray-600 mt-2">
          Your order can't be completed.<br />
          Please check your internet connection!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onBackHome}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
          >
            Back to Home
          </button>
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-[#03262C] text-white rounded hover:bg-[#021b20] transition"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailuremodel;
