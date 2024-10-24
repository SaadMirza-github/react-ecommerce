import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl text-gray-800 mt-4">${product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Customer Reviews</h3>
              {product.reviews.map(review => (
                <div key={review.id} className="bg-white p-4 shadow-md rounded-lg mt-4">
                  <p className="font-medium text-gray-800">{review.name}</p>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
