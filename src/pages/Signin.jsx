import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { 
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification 
} from "../firebase/auth";


const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "France",
  "Japan",
  "China",
  "Sri Lanka",
  "Other",
];

const Signin = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    contactnumber: "",
    age: "",
    job: "",
  });
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Cleanup function for animations
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate terms checkbox
    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
      setError("You must agree to the Terms & Conditions");
      setIsLoading(false);
      return;
    }
    
    // Validate fields
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.country ||
      !form.contactnumber ||
      !form.age ||
      !form.job
    ) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      // Create user with Firebase
      await doCreateUserWithEmailAndPassword(
        form.email, 
        form.password,
        {
          name: form.name,
          country: form.country,
          contactnumber: form.contactnumber,
          age: form.age,
          job: form.job,
          role: "user"
        }
      );
      
      // Send verification email
      await doSendEmailVerification();
      
      alert("Account created successfully! Please check your email to verify your account.");
      navigate("/login");
    } catch (error) {
      // Format Firebase errors for better UX
      let errorMessage = error.message;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered. Please sign in.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Please enter a valid email address";
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (

    
    <div style={styles.container}>
      <div style={styles.backgroundDecor}>
        <div style={styles.decorCircle1}></div>
        <div style={styles.decorCircle2}></div>
        <div style={styles.decorCircle3}></div>
      </div>
      
      <form 
        onSubmit={handleSubmit}
        style={{
          ...styles.form,
          transform: isFocused ? "translateY(-10px) scale(1.01)" : "translateY(0) scale(1)",
          boxShadow: isFocused 
            ? "0 30px 80px rgba(13, 79, 28, 0.35), 0 15px 50px rgba(45, 122, 62, 0.25)" 
            : styles.form.boxShadow
        }}
      >
        <h2 style={styles.heading}>Explore Sri Lanka</h2>
        <div style={styles.subHeading}>Join our exclusive community</div>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            autoComplete="name"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={isLoading}
          />
          <svg style={styles.inputIcon} viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        
        <div style={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            autoComplete="username"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={isLoading}
          />
          <svg style={styles.inputIcon} viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            autoComplete="new-password"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={isLoading}
          />
          <svg style={styles.inputIcon} viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
        </div>
        
        <div style={styles.inputGroup}>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            style={styles.select}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={isLoading}
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <svg style={styles.inputIcon} viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        
        <div style={styles.twoColumn}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="contactnumber"
              placeholder="Contact Number"
              value={form.contactnumber}
              onChange={handleChange}
              style={styles.input}
              autoComplete="tel"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={isLoading}
            />
            <svg style={styles.inputIcon} viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          
          <div style={styles.inputGroup}>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              style={styles.input}
              min="1"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={isLoading}
            />
            <svg style={styles.inputIcon} viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
        </div>
        
        <div style={styles.inputGroup}>
          <input
            type="text"
            name="job"
            placeholder="Profession"
            value={form.job}
            onChange={handleChange}
            style={styles.input}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={isLoading}
          />
          <svg style={styles.inputIcon} viewBox="0 0 24 24">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
          </svg>
        </div>
        
        <div style={styles.checkboxGroup}>
          <input 
            type="checkbox" 
            id="terms" 
            style={styles.checkbox} 
            disabled={isLoading}
          />
          <label htmlFor="terms" style={styles.checkboxLabel}>
            I agree to the <a href="" style={styles.link}>Terms & Conditions</a> and <a href="#" style={styles.link}>Privacy Policy</a>
          </label>
        </div>
        
        <button 
          type="submit" 
          style={{
            ...styles.button,
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? "not-allowed" : "pointer"
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.backgroundPosition = "100% 0";
              e.target.style.transform = "translateY(-5px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.backgroundPosition = "0 0";
              e.target.style.transform = "translateY(0)";
            }
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <span style={styles.buttonText}>Creating Account...</span>
            
          ) : (
            <>
              <span style={styles.buttonText}>Create Account</span>
              <span style={styles.buttonIcon}>→</span>
            </>
          )}
        </button>
        
        <div style={styles.footer}>
          Already have an account? <Link to='/login' style={{ textDecoration: "none" }}><span style={styles.link}>Sign In</span></Link>
        </div>
      </form>
      
      <style>{keyframes}</style>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top right,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 30%,rgb(255, 255, 255) 100%)",
    backgroundSize: "500% 500%",
    animation: "gradientShift 12s ease infinite",
    padding: "2rem",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  
  backgroundDecor: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: 0,
  },
  
  decorCircle1: {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(74, 153, 96, 0.15) 0%, rgba(74, 153, 96, 0) 70%)",
    animation: "float 25s infinite ease-in-out",
  },
  
  decorCircle2: {
    position: "absolute",
    bottom: "-150px",
    left: "-150px",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(107, 183, 123, 0.1) 0%, rgba(107, 183, 123, 0) 70%)",
    animation: "float 30s infinite ease-in-out",
    animationDelay: "5s",
  },
  
  decorCircle3: {
    position: "absolute",
    top: "40%",
    left: "20%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
    animation: "pulse 8s infinite ease-in-out",
  },
  
  form: {
    background: "linear-gradient(145deg, rgba(255,255,255,0.97) 0%, rgba(252, 254, 253, 0.99) 100%)",
    padding: "3.5rem 3rem",
    borderRadius: "28px",
    boxShadow: `
      0 30px 70px rgba(13, 79, 28, 0.3),
      0 15px 50px rgba(0, 130, 28, 0.2),
      inset 0 1px 1px rgba(255,255,255,0.9)
    `,
    display: "flex",
    flexDirection: "column",
    minWidth: "1100px",
    maxWidth: "500px",
    width: "100px",
    border: "1px solid rgba(107, 183, 123, 0.2)",
    backdropFilter: "blur(15px)",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
    fontSize:14,
  },
  
  heading: {
    background: "linear-gradient(135deg, #0d4f1c 0%, #2d7a3e 50%, #4a9960 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0.5rem",
    fontWeight: "80",
    letterSpacing: "0.5px",
    fontSize: "2.8rem",
    textAlign: "center",
    textShadow: "0 2px 4px rgba(13, 79, 28, 0.1)",
    animation: "textGlow 3s ease-in-out infinite alternate",
  },
  
  subHeading: {
    color: "#4a9960",
    fontSize: "1.3rem",
    textAlign: "center",
    marginBottom: "2.5rem",
    fontWeight: "500",
    letterSpacing: "0.3px",
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
    fontSize: "12px",
    background: "linear-gradient(145deg, #f8fff8 0%, #f0fff4 100%)",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    outline: "none",
    boxShadow: `
      0 6px 16px rgba(13, 79, 28, 0.08),
      inset 0 1px 1px rgba(255,255,255,0.9)
    `,
    color: "#0d4f1c",
    fontWeight: "500",
    position: "relative",
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
  
  select: {
    width: "100%",
    padding: "1.5rem 1.5rem 1.5rem 4rem",
    borderRadius: "18px",
    border: "1px solid rgba(107, 183, 123, 0.3)",
    fontSize: "12px",
    background: "linear-gradient(145deg, #f8fff8 0%, #f0fff4 100%)",
    color: "#0d4f1c",
    outline: "none",
    boxShadow: `
      0 6px 16px rgba(13, 79, 28, 0.08),
      inset 0 1px 1px rgba(255,255,255,0.9)
    `,
    appearance: "none",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%234a9960' viewBox='0 0 16 16'%3e%3cpath d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1.5rem center",
    backgroundSize: "1.2rem",
    height: "65px",
    boxSizing: "border-box",
  },
  
  twoColumn: {
    display: "flex",
    gap: "1.5rem",
  },
  
  button: {
    marginTop: "2.5rem",
    padding: "1.7rem 2.5rem",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(135deg, #0d4f1c 0%, #2d7a3e 25%, #4a9960 50%, #6bb77b 75%, #8bc896 100%)",
    backgroundSize: "250% 250%",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    boxShadow: `
      0 12px 30px rgba(13, 79, 28, 0.35),
      0 6px 18px rgba(45, 122, 62, 0.25),
      inset 0 1px 0 rgba(255,255,255,0.25)
    `,
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    animation: "buttonPulse 3s ease-in-out infinite",
    height: "75px",
  },
  
  buttonText: {
    position: "relative",
    zIndex: 2,
    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
  },
  
  buttonIcon: {
    fontSize: "1.8rem",
    fontWeight: "300",
    position: "relative",
    zIndex: 2,
  },
  
  error: {
    color: "#c53030",
    marginBottom: "1.5rem",
    fontSize: "1.1rem",
    background: "linear-gradient(145deg, #fed7d7 0%, #fbb6b6 100%)",
    padding: "1.2rem 1.8rem",
    borderRadius: "14px",
    border: "2px solid #fc8181",
    fontWeight: "500",
    boxShadow: "0 6px 16px rgba(197, 48, 48, 0.15)",
    animation: "errorShake 0.5s ease-in-out",
  },
  
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    marginTop: "1.5rem",
    paddingLeft: "0.5rem",
  },
  
  checkbox: {
    width: "24px",
    height: "24px",
    marginRight: "12px",
    accentColor: "#4a9960",
    cursor: "pointer",
  },
  
  checkboxLabel: {
    color: "#2d7a3e",
    fontSize: "14px",
    fontWeight: "500",
  },
  
  link: {
    color: "#0d4f1c",
    fontWeight: "600",
    textDecoration: "none",
    borderBottom: "2px dotted rgba(13, 79, 28, 0.3)",
    transition: "all 0.2s ease",
    
    ":hover": {
      borderBottom: "2px solid #0d4f1c",
    }
  },
  
  footer: {
    textAlign: "center",
    marginTop: "2rem",
    color: "#4a9960",
    fontSize: "14px",
    fontWeight: "500",
    paddingTop: "1.5rem",
    borderTop: "1px solid rgba(107, 183, 123, 0.2)",
  }
};

const keyframes = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes textGlow {
    0% {
      text-shadow: 0 2px 4px rgba(13, 79, 28, 0.1);
    }
    100% {
      text-shadow: 0 4px 8px rgba(13, 79, 28, 0.2), 0 0 20px rgba(74, 153, 96, 0.3);
    }
  }
  
  @keyframes buttonPulse {
    0%, 100% {
      box-shadow: 
        0 12px 30px rgba(13, 79, 28, 0.35),
        0 6px 18px rgba(45, 122, 62, 0.25),
        inset 0 1px 0 rgba(255,255,255,0.25);
    }
    50% {
      box-shadow: 
        0 12px 40px rgba(13, 79, 28, 0.45),
        0 8px 25px rgba(45, 122, 62, 0.35),
        inset 0 1px 0 rgba(255,255,255,0.3),
        0 0 40px rgba(74, 153, 96, 0.3);
    }
  }
  
  @keyframes errorShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(10px, 15px) rotate(5deg); }
    50% { transform: translate(0, 20px) rotate(0deg); }
    75% { transform: translate(-10px, 15px) rotate(-5deg); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 0.4; }
  }
`;

export default Signin;