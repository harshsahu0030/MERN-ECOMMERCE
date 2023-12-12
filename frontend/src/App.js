import React, { useEffect } from "react";
import "./styles/app.scss";
import Home from "./PAGES/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./PAGES/Contact";
import Signup from "./PAGES/Signup";
import Login from "./PAGES/Login";
import Shopnow from "./PAGES/Shopnow";
import NewArrivals from "./PAGES/NewArrivals";
import Cart from "./PAGES/Cart";
import Products from "./PAGES/Products";
import Favourites from "./PAGES/Favourites";
import Copyright from "./COMPONENTS/Copyright";
import Footer from "./COMPONENTS/Footer";
import ProductDetails from "./PAGES/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction } from "./actions/userAction";
import Account from "./PAGES/Account";
import Dashboard from "./PAGES/ADMIN/Dashboard";
import ProductsAdmin from "./PAGES/ADMIN/ProductsAdmin";
import OrdersAdmin from "./PAGES/ADMIN/OrdersAdmin";
import CategoriesAdmin from "./PAGES/ADMIN/CategoriesAdmin";
import CreateProductAdmin from "./PAGES/ADMIN/CreateProductAdmin";
import UpdateProfile from "./PAGES/UpdateProfile";
import UpdatePassword from "./PAGES/UpdatePassword";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUserAction());
  }, [dispatch]);

  return (
    <div className="app_container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shopnow" element={<Shopnow />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={
              isAuthenticated && user.role === "admin" ? <Cart /> : <Login />
            }
          />
          <Route
            path="/favourites"
            element={isAuthenticated ? <Favourites /> : <Login />}
          />

          <Route
            path="/profile/update"
            element={isAuthenticated ? <UpdateProfile /> : <Login />}
          />
          <Route
            path="/password/update"
            element={isAuthenticated ? <UpdatePassword /> : <Login />}
          />

          <Route
            path="/admin/dashboard"
            element={
              isAuthenticated && user.role === "admin" ? (
                <Dashboard />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/dashboard/orders"
            element={
              isAuthenticated && user.role === "admin" ? (
                <OrdersAdmin />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/dashboard/products"
            element={
              isAuthenticated && user.role === "admin" ? (
                <ProductsAdmin />
              ) : (
                <Login />
              )
            }
          />

          <Route
            path="/admin/dashboard/products/new"
            element={
              isAuthenticated && user.role === "admin" ? (
                <CreateProductAdmin />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/dashboard/categories"
            element={
              isAuthenticated && user.role === "admin" ? (
                <CategoriesAdmin />
              ) : (
                <Login />
              )
            }
          />
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
};

export default App;
