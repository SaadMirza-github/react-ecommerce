import React, { useState } from 'react';

const ManageCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState(["Electronics", "Fashion", "Home & Kitchen"]);

  const handleAddCategory = () => {
    if (categoryName) {
      setCategories([...categories, categoryName]);
      setCategoryName("");
    }
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter(c => c !== category));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Manage Categories</h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="border px-4 py-2 rounded-md w-full"
          placeholder="Add new category"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-md ml-4 hover:bg-purple-500"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
      </div>

      <ul className="list-disc pl-6">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center">
            {category}
            <button
              className="text-red-600 hover:text-red-800 ml-4"
              onClick={() => handleDeleteCategory(category)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCategories;
