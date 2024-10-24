import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductListingPage from "./components/ProductListingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/CartPage";
import AdminDashboard from './components/admin/AdminDashboard';

// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/products" element={<ProductListingPage />} />
//           <Route path="/products/:id" element={<ProductDetailPage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Define admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {/* Render Navbar only if NOT on admin routes */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};


export default App;
