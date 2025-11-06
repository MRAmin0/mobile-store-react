import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./AuthPage.css";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && pass !== pass2) {
            alert("رمزهای عبور یکسان نیستند");
            return;
        }
        // اینجا هر کاری خواستی بکن (login/register)
        alert(isLogin ? "ورود موفق" : "ثبت‌نام موفق");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                {/* پنل چپ */}
                <div className="left-panel">
                    <h2>سلام دوست من!</h2>
                    <p>
                        {isLogin
                            ? "برای استفاده از امکانات سایت هنوز حساب نداری؟"
                            : "قبلاً ثبت‌نام کردی؟ همین حالا وارد شو."}
                    </p>
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "ایجاد حساب" : "رفتن به ورود"}
                    </button>
                </div>

                {/* پنل راست: فرم */}
                <div className="right-panel">
                    <h1>{isLogin ? "ورود به حساب" : "ثبت‌نام کاربر جدید"}</h1>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <label>ایمیل:</label>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label>رمز عبور:</label>
                        <div className="password-field">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="رمز عبور"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                required
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword((v) => !v)}
                                aria-label="toggle password visibility"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {!isLogin && (
                            <>
                                <label>تکرار رمز عبور:</label>
                                <div className="password-field">
                                    <input
                                        type={showPassword2 ? "text" : "password"}
                                        placeholder="تکرار رمز عبور"
                                        value={pass2}
                                        onChange={(e) => setPass2(e.target.value)}
                                        required
                                    />
                                    <span
                                        className="eye-icon"
                                        onClick={() => setShowPassword2((v) => !v)}
                                        aria-label="toggle confirm password visibility"
                                    >
                                        {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </>
                        )}

                        <button type="submit">{isLogin ? "ورود" : "ثبت‌نام"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
