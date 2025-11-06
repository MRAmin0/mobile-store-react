import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="/favicon.ico" alt="logo" />
                    <span className="brand">MobileLand</span>
                </div>

                <nav className="footer-links">
                    <Link to="/">خانه</Link>
                    <Link to="/about">درباره ما</Link>
                    <Link to="/contact">تماس با ما</Link>
                </nav>

                <div className="footer-social">
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://t.me" target="_blank" rel="noreferrer">
                        <FaTelegramPlane />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <p className="footer-copy">
                © {new Date().getFullYear()} MobileLand – تمام حقوق محفوظ است.
            </p>
        </footer>
    );
}

export default Footer;
