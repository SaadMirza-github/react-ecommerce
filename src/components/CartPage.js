import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
 cartItems = [];
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-700">Your cart is empty.</p>
            <Link to="/products" className="mt-4 inline-block text-purple-600">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
              {/* {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                      className="w-12 p-2 border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="text-lg text-gray-800">${item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="ml-4 text-red-500 hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              ))} */}
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Order Summary</h3>
              <p className="mt-4 text-lg text-gray-700">Total: ${getTotalPrice()}</p>
              <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg w-full hover:bg-purple-500 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
