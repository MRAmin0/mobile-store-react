import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage({ addToCart }) {
    const [cartCounts, setCartCounts] = useState({}); // هر محصول یه شمارنده داره

    const products = [
        { id: 1, name: "iPhone 15 Pro", price: 79900000, img: "/images/iphone15.png" },
        { id: 2, name: "Samsung Galaxy S24 Ultra", price: 69900000, img: "/images/s24ultra.png" },
        { id: 3, name: "Xiaomi 14 Pro", price: 39900000, img: "/images/xiaomi14.png" },
        { id: 4, name: "Google Pixel 8", price: 44900000, img: "/images/pixel8.png" },
        { id: 5, name: "OnePlus 12", price: 37900000, img: "/images/oneplus12.png" },
        { id: 6, name: "Sony Xperia 1 V", price: 51900000, img: "/images/sony1v.png" },
        { id: 7, name: "Huawei P60 Pro", price: 48900000, img: "/images/huaweiP60.png" },
        { id: 8, name: "Nothing Phone 2", price: 35900000, img: "/images/nothing2.png" },
        { id: 9, name: "Asus ROG Phone 8", price: 62900000, img: "/images/rog8.png" },
    ];

    // محاسبه تعداد کل محصولات در سبد
    const totalItems = Object.values(cartCounts).reduce((a, b) => a + b, 0);

    const handleAdd = (p) => {
        setCartCounts((prev) => ({
            ...prev,
            [p.id]: (prev[p.id] || 0) + 1,
        }));
        addToCart(p);
    };

    const handleRemove = (p) => {
        setCartCounts((prev) => {
            const count = (prev[p.id] || 0) - 1;
            if (count <= 0) {
                const newCounts = { ...prev };
                delete newCounts[p.id];
                return newCounts;
            }
            return { ...prev, [p.id]: count };
        });
    };

    return (
        <div className="landing-page">
            <header className="header">
                <h1>فروشگاه موبایل</h1>
                <p>جدیدترین گوشی‌ها با بهترین قیمت‌ها 📱</p>
            </header>

            <div className="grid-container">
                {products.map((p) => {
                    const count = cartCounts[p.id] || 0;
                    return (
                        <div key={p.id} className="product-card">
                            <img src={p.img} alt={p.name} />
                            <h3>{p.name}</h3>
                            <p className="price">{p.price.toLocaleString()} تومان</p>

                            {count === 0 ? (
                                <button
                                    onClick={() => handleAdd(p)}
                                    className="add-btn"
                                >
                                    🛒 افزودن به سبد
                                </button>
                            ) : (
                                <div className="counter">
                                    <button
                                        onClick={() => handleRemove(p)}
                                        className="minus-btn"
                                    >
                                        ➖
                                    </button>
                                    <span className="count">{count}</span>
                                    <button
                                        onClick={() => handleAdd(p)}
                                        className="plus-btn"
                                    >
                                        ➕
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <footer className="footer">
                <Link to="/cart" className="nav-btn">
                    سبد خرید: {totalItems} محصول
                </Link>
            </footer>
        </div>
    );
}
