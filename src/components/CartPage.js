import React from "react";
import "./CartPage.css";

export default function CartPage({ cart, removeFromCart, clearCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1>🛒 سبد خرید</h1>

                {cart.length === 0 ? (
                    <p className="empty">سبد خرید خالی است</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <img src={item.img} alt={item.name} />
                                    <div className="info">
                                        <span>{item.name}</span>
                                        <span className="price">{item.price.toLocaleString()} تومان</span>
                                    </div>
                                    <button onClick={() => removeFromCart(index)}>❌</button>
                                </li>
                            ))}
                        </ul>

                        <p className="total-price">جمع کل: {total.toLocaleString()} تومان</p>
                        <button className="clear-btn" onClick={clearCart}>
                            🧹 خالی کردن سبد
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
