import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaClipboardList, FaChartBar, FaUserFriends, FaTags, FaPlus, FaEdit } from 'react-icons/fa';

const AdminSidebar = () => {
  const location = useLocation(); // Get the current location
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State to manage products dropdown visibility
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // State to manage categories dropdown visibility

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-700 text-white w-64 h-full p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-6">Admin Menu</h2>
      <ul className="flex-grow space-y-3 overflow-y-auto">
        <li>
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-600" onClick={() => setIsProductsOpen(!isProductsOpen)}>
            <span className="flex items-center">
              <FaClipboardList className="mr-3" />
              Products
            </span>
            <span>{isProductsOpen ? '▲' : '▼'}</span> {/* Arrow for dropdown */}
          </div>
          {isProductsOpen && (
            <ul className="pl-6 space-y-2 mt-2">
              <li>
                <Link 
                  to="/admin/products/create" 
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${location.pathname === '/admin/products/create' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                >
                  <FaPlus className="mr-3" />
                  Create
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/products/edit" 
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${location.pathname === '/admin/products/edit' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                >
                  <FaEdit className="mr-3" />
                  Edit
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-600" onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
            <span className="flex items-center">
              <FaTags className="mr-3" />
              Categories
            </span>
            <span>{isCategoriesOpen ? '▲' : '▼'}</span> {/* Arrow for dropdown */}
          </div>
          {isCategoriesOpen && (
            <ul className="pl-6 space-y-2 mt-2">
              <li>
                <Link 
                  to="/admin/manage-categories/create" 
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${location.pathname === '/admin/manage-categories/create' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                >
                  <FaPlus className="mr-3" />
                  Create
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/manage-categories/edit" 
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${location.pathname === '/admin/manage-categories/edit' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                >
                  <FaEdit className="mr-3" />
                  Edit
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link 
            to="/admin/order-management" 
            className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${location.pathname === '/admin/order-management' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <FaClipboardList className="mr-3" />
            Order Management
          </Link>
        </li>
        <li>
          <Link 
            to="/admin/user-management" 
            className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${location.pathname === '/admin/user-management' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <FaUserFriends className="mr-3" />
            User Management
          </Link>
        </li>
        <li>
          <Link 
            to="/admin/analytics" 
            className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${location.pathname === '/admin/analytics' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <FaChartBar className="mr-3" />
            Analytics Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
