import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert("لطفاً همه فیلدها را پر کنید!");
            return;
        }
        alert("پیام شما با موفقیت ارسال شد ✅");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1>تماس با ما</h1>
                <p>اگه نظری، پیشنهادی یا سوالی داری، فرم زیر رو پر کن تا بررسی کنیم.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>نام:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="نام شما"
                    />

                    <label>ایمیل:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                    />

                    <label>پیام:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="متن پیام شما..."
                    ></textarea>

                    <button type="submit">ارسال پیام</button>
                </form>
            </div>
        </div>
    );
}
