import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductListingPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  // Filter Logic
//   const filteredProducts = products
//     .filter(product => 
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter(product => 
//       selectedCategory ? product.category === selectedCategory : true
//     )
//     .filter(product => 
//       selectedBrand ? product.brand === selectedBrand : true
//     )
//     .filter(product => 
//       product.price >= priceRange[0] && product.price <= priceRange[1]
//     )
//     .filter(product => 
//       product.rating >= selectedRating
//     );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Category Filter */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Category</h3>
          <select
            className="border p-2 w-full rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Price Range</h3>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="border p-2 w-full rounded-md"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            />
            <input
              type="number"
              placeholder="Max"
              className="border p-2 w-full rounded-md"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Brand</h3>
          <select
            className="border p-2 w-full rounded-md"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Rating</h3>
          <select
            className="border p-2 w-full rounded-md"
            value={selectedRating}
            onChange={(e) => setSelectedRating(parseInt(e.target.value))}
          >
            <option value={0}>All Ratings</option>
            <option value={1}>1 Star & Up</option>
            <option value={2}>2 Stars & Up</option>
            <option value={3}>3 Stars & Up</option>
            <option value={4}>4 Stars & Up</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-medium mt-4 text-gray-800 hover:text-purple-600">{product.name}</h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <p className="text-yellow-400">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</p>
              <Link to={`/products/${product.id}`} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg inline-block transition hover:bg-purple-500">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-gray-700">
            No products found.
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductListingPage;
