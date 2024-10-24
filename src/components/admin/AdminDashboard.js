import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import CreateProduct from './CreateProduct';
import ManageCategories from './ManageCategories';
import OrderManagement from './OrderManagement';
import AnalyticsDashboard from './AnalyticsDashboard';
import UserManagement from './UserManagement';
import HomePage from '../HomePage';

const AdminDashboard = () => {
    return (
        <div className="flex h-screen ">
            <AdminSidebar />
            <div className="flex-grow p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                
                <Routes>
                    <Route path="/" element={<AnalyticsDashboard />} /> 
                    <Route path="/create-product" element={<CreateProduct />} />
                    <Route path="/manage-categories" element={<ManageCategories />} />
                    <Route path="/order-management" element={<OrderManagement />} />
                    <Route path="/user-management" element={<UserManagement />} />
                    <Route path="/analytics" element={<AnalyticsDashboard />} />
                    <Route path="/test" element={<div>Test Component Loaded</div>} />
                    
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
