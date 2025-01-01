import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import SideButtons from "../components/SideButtons.jsx";

const PaymentPage = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />
      <SideButtons/>
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center text-teal-600 mb-8">
          Complete Your Payment
        </h2>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
          >
            {/* Card Details Section */}
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Enter Card Details
              </h3>
              <div className="flex justify-center gap-4">
                <img
                  src="/visa.png" // Replace with your Visa card icon path
                  alt="Visa"
                  className="w-12"
                />
                <img
                  src="/mastercard.png" // Replace with your Mastercard icon path
                  alt="Mastercard"
                  className="w-12"
                />
                <img
                  src="/amex.png" // Replace with your Amex card icon path
                  alt="American Express"
                  className="w-12"
                />
              </div>
            </div>

            {/* Name on Card */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name on Card
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={cardDetails.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your name as on card"
                required
              />
            </div>

            {/* Card Number */}
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-gray-700 font-medium mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="1234 5678 9101 1121"
                required
              />
            </div>

            {/* Expiry and CVV */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label
                  htmlFor="expiry"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="cvv"
                  className="block text-gray-700 font-medium mb-2"
                >
                  CVV
                </label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="123"
                  required
                />
              </div>
            </div>

            {/* Payment Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Pay Now
            </button>

            {/* Secure Payment Notice */}
            <p className="text-sm text-gray-500 text-center mt-4">
              <i className="fas fa-lock"></i> Secure Payment Guaranteed
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
