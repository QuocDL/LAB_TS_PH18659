import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminProductList from "./pages/Admin/AdminProductList";
import AdminCreateProduct from "./pages/Admin/AdminCreateProduct";
import AdminEditProduct from "./pages/Admin/AdminEditProduct";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Layout from "./Layout/Layout";
import AdminLayout from "./Layout/AdminLayout";

import { configureAxios } from "./config/axios";
import "react-toastify/dist/ReactToastify.css";

configureAxios();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route path="products" element={<AdminProductList />} />
          <Route
            path="products/create"
            element={<AdminCreateProduct />}
          />
          <Route
            path="products/edit/:productId"
            element={<AdminEditProduct />}
          />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
