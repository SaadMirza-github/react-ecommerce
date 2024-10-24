import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ products }) => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Welcome to ShopEase</h1>
          <p className="text-lg mt-4">Find your perfect product at the best price.</p>
          <Link to="/products" className="mt-6 inline-block px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-200">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* {products.slice(0, 4).map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 transition hover:shadow-2xl">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-medium mt-4 text-gray-800 hover:text-purple-600">{product.name}</h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <Link to={`/products/${product.id}`} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg inline-block transition hover:bg-purple-500">
                View Details
              </Link>
            </div>
          ))} */}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Shop by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/products?category=electronics" className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-gray-200">
            <h3 className="text-2xl font-medium text-gray-700">Electronics</h3>
          </Link>
          <Link to="/products?category=fashion" className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-gray-200">
            <h3 className="text-2xl font-medium text-gray-700">Fashion</h3>
          </Link>
          <Link to="/products?category=home" className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-gray-200">
            <h3 className="text-2xl font-medium text-gray-700">Home & Kitchen</h3>
          </Link>
          <Link to="/products?category=sports" className="bg-gray-100 shadow-lg rounded-lg p-6 text-center hover:bg-gray-200">
            <h3 className="text-2xl font-medium text-gray-700">Sports & Outdoors</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
