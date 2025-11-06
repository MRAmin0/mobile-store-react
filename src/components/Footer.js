import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTelegramPlane, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/favicon.ico" alt="MobileLand" />
                    <span className="brand">MobileLand</span>
                </div>

                <nav className="footer-links">
                    <Link to="/">خانه</Link>
                    <Link to="/about">درباره ما</Link>
                    <Link to="/contact">تماس با ما</Link>
                </nav>

                <div className="footer-socials">
                    <a href="#instagram" title="Instagram"><FaInstagram /></a>
                    <a href="#telegram" title="Telegram"><FaTelegramPlane /></a>
                    <a href="#github" title="GitHub"><FaGithub /></a>
                </div>
            </div>

            <p className="footer-copy">
                © {new Date().getFullYear()} MobileLand — تمام حقوق محفوظ است.
            </p>
        </footer>
    );
}
