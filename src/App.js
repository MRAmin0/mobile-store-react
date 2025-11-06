import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import AuthPage from "./components/AuthPage";
import CartPage from "./components/CartPage";

import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("loggedInUser"));
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []; // خواندن سبد خرید از localStorage
  });

  // ذخیره سبد خرید در localStorage بعد از هر تغییر
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} به سبد خرید اضافه شد!`);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    toast.success("محصول از سبد خرید حذف شد!");
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // پاکسازی داده‌های سبد خرید از localStorage
    toast.success("سبد خرید خالی شد.");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("cart"); // پاکسازی سبد خرید از localStorage بعد از خروج
    setUsername(null);
    toast.success("با موفقیت از حساب خارج شدید ✅");
    setTimeout(() => {
      window.location.href = "/auth";
    }, 1500);
  };

  return (
    <div className={`app-container ${dark ? "dark" : ""}`}>
      <Router>
        <nav className="navbar">
          <Link to="/" className="nav-btn">خانه</Link>
          <Link to="/about" className="nav-btn">درباره ما</Link>
          <Link to="/contact" className="nav-btn">تماس با ما</Link>
          <Link to="/cart" className="nav-btn">🛒 سبد خرید ({cart.length})</Link>

          {!username ? (
            <Link to="/auth" className="nav-btn">ورود / ثبت‌نام</Link>
          ) : (
            <div className="user-info">
              <span className="welcome-text">خوش آمدی، {username} 👋</span>
              <button className="logout-btn" onClick={handleLogout}>خروج</button>
            </div>
          )}

          <button className="mode-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️ حالت روشن" : "🌙 حالت تاریک"}
          </button>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<LandingPage addToCart={addToCart} />} // ارسال تابع به صفحه محصولات
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
        </Routes>

        <ToastContainer position="bottom-right" autoClose={2000} />
      </Router>
    </div>
  );
}

export default App;
