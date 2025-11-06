import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBars, FaTimes } from "react-icons/fa";

import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import AuthPage from "./components/AuthPage";
import CartPage from "./components/CartPage";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("loggedInUser"));
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

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
    localStorage.removeItem("cart");
    toast.success("سبد خرید خالی شد.");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("cart");
    setUsername(null);
    toast.success("با موفقیت از حساب خارج شدید ✅");
    setTimeout(() => {
      window.location.href = "/auth";
    }, 1500);
  };

  return (
    <div className={`app-container ${dark ? "dark" : ""}`}>
      {/* ======= NAVBAR ======= */}
      <nav className="navbar">
        <div className="nav-header">
          <h2 className="nav-logo">📱 فروشگاه موبایل</h2>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>خانه</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>درباره ما</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>تماس با ما</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            🛒 سبد خرید ({cart.length})
          </Link>

          {!username ? (
            <Link to="/auth" onClick={() => setMenuOpen(false)}>
              ورود / ثبت‌نام
            </Link>
          ) : (
            <div className="user-info">
              <span>👋 {username}</span>
              <button onClick={handleLogout}>خروج</button>
            </div>
          )}

          <button
            className="mode-toggle"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️ روشن" : "🌙 تاریک"}
          </button>
        </div>
      </nav>

      {/* ======= ROUTES ======= */}
      <Routes>
        <Route path="/" element={<LandingPage addToCart={addToCart} />} />
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
    </div>
  );
}

export default App;
