import React, { useState } from 'react';

const CreateProduct = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call to create product
        console.log({ productName, price, description, category, brand, image });
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Product Name</label>
                    <input
                        type="text"
                        className="w-full border px-4 py-2 rounded-md"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        className="w-full border px-4 py-2 rounded-md"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        className="w-full border px-4 py-2 rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <select
                        className="w-full border px-4 py-2 rounded-md"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="home-appliances">Home Appliances</option>
                        <option value="books">Books</option>
                        <option value="toys">Toys</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Brand</label>
                    <select
                        className="w-full border px-4 py-2 rounded-md"
                        value={category}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    >
                        <option value="">Select a Brand</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>

                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="file"
                        className="w-full border px-4 py-2 rounded-md"
                        accept="image/*" // Accepts image files only
                        onChange={(e) => setImage(e.target.files[0])} // Capture the selected file
                        required
                    />
                </div>
                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
