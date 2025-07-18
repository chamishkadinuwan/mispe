import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doPasswordReset } from "../firebase/auth";

const LoginPage = ({ setIsLoggedIn }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setResetMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      await doSignInWithEmailAndPassword(form.email, form.password);
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      setError(error.message.replace("Firebase: ", ""));
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!form.email) {
      setError("Please enter your email address first.");
      return;
    }

    try {
      await doPasswordReset(form.email);
      setResetMessage("Password reset email sent! Check your inbox.");
      setError("");
    } catch (error) {
      setError("Error sending password reset email: " + error.message.replace("Firebase: ", ""));
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Explore Sri Lanka</h2>
        {error && <div style={styles.error}>{error}</div>}
        {resetMessage && <div style={styles.success}>{resetMessage}</div>}
        
        <div style={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          <svg style={styles.inputIcon} viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />
          <svg style={styles.inputIcon} viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
        </div>
        
        <div style={styles.forgotPassword}>
          <button 
            type="button"
            onClick={handleForgotPassword}
            style={styles.forgotPasswordButton}
          >
            Forgot Password?
          </button>
        </div>
        
        <button type="submit" style={styles.button}>
          Login
        </button>
        
        <div style={styles.divider}>
          <span style={styles.dividerText}>or continue with</span>
        </div>
        
        <div style={styles.socialButtons}>
          <button 
            type="button" 
            style={{...styles.socialButton, background: "#4285F4"}}
            onClick={() => console.log("Google login")}
          >
            Google
          </button>
          <button 
            type="button" 
            style={{...styles.socialButton, background: "#3B5998"}}
            onClick={() => console.log("Facebook login")}
          >
            Facebook
          </button>
        </div>
        
        <div style={styles.signupContainer}>
          <span style={{ marginRight: "0.5rem", color: "#4a9960" }}>
            Don't have an account?
          </span>
          <NavLink to="/Signin" style={{ textDecoration: "none" }}>
            <span style={styles.link}>Sign Up</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(circle at top right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 30%, rgb(255, 255, 255) 100%)",
    padding: "2rem",
    position: "relative",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  form: {
    background: "linear-gradient(145deg, rgba(255,255,255,0.97) 0%, rgba(252, 254, 253, 0.99) 100%)",
    padding: "3rem",
    borderRadius: "28px",
    boxShadow: "0 30px 70px rgba(13, 79, 28, 0.3), 0 15px 50px rgba(0, 130, 28, 0.2)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
    border: "1px solid rgba(107, 183, 123, 0.2)",
    backdropFilter: "blur(15px)",
    zIndex: 1,
  },
  heading: {
    background: "linear-gradient(135deg, #0d4f1c 0%, #2d7a3e 50%, #4a9960 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1.5rem",
    fontWeight: "700",
    fontSize: "2.5rem",
    textAlign: "center",
  },
  inputGroup: {
    position: "relative",
    margin: "1.2rem 0",
  },
  input: {
    width: "100%",
    padding: "1.5rem 1.5rem 1.5rem 4rem",
    borderRadius: "18px",
    border: "1px solid rgba(107, 183, 123, 0.3)",
    fontSize: "1rem",
    background: "linear-gradient(145deg, #f8fff8 0%, #f0fff4 100%)",
    outline: "none",
    boxShadow: "0 6px 16px rgba(13, 79, 28, 0.08), inset 0 1px 1px rgba(255,255,255,0.9)",
    color: "#0d4f1c",
    fontWeight: "500",
    height: "65px",
    boxSizing: "border-box",
  },
  inputIcon: {
    position: "absolute",
    left: "1.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    width: "28px",
    height: "28px",
    fill: "#4a9960",
    zIndex: 2,
  },
  button: {
    marginTop: "1.5rem",
    padding: "1.5rem",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(135deg, #0d4f1c 0%, #2d7a3e 100%)",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "1.1rem",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(13, 79, 28, 0.35), 0 6px 18px rgba(45, 122, 62, 0.25)",
    transition: "all 0.3s ease",
    height: "65px",
  },
  error: {
    color: "#c53030",
    marginBottom: "1.5rem",
    fontSize: "1rem",
    background: "linear-gradient(145deg, #fed7d7 0%, #fbb6b6 100%)",
    padding: "1rem",
    borderRadius: "14px",
    border: "2px solid #fc8181",
    fontWeight: "500",
  },
  success: {
    color: "#22543d",
    marginBottom: "1.5rem",
    fontSize: "1rem",
    background: "linear-gradient(145deg, #c6f6d5 0%, #9ae6b4 100%)",
    padding: "1rem",
    borderRadius: "14px",
    border: "2px solid #68d391",
    fontWeight: "500",
  },
  link: {
    color: "#0d4f1c",
    fontWeight: "600",
    textDecoration: "none",
    borderBottom: "2px dotted rgba(13, 79, 28, 0.3)",
    transition: "all 0.2s ease",
  },
  forgotPassword: {
    textAlign: "right",
    marginTop: "0.5rem",
  },
  forgotPasswordButton: {
    background: "none",
    border: "none",
    color: "#4a9960",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "0.9rem",
    fontWeight: "500",
    padding: "0.5rem",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0",
  },
  dividerText: {
    padding: "0 1rem",
    color: "#4a9960",
    fontSize: "0.9rem",
  },
  socialButtons: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
  },
  socialButton: {
    flex: 1,
    padding: "1rem",
    borderRadius: "18px",
    border: "none",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  signupContainer: {
    textAlign: "center",
    marginTop: "1.5rem",
    color: "#4a9960",
    fontSize: "1rem",
    fontWeight: "500",
    paddingTop: "1.5rem",
    borderTop: "1px solid rgba(107, 183, 123, 0.2)",
  },
};

export default LoginPage;