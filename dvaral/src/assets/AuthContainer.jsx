import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const Login = ({ onToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Login attempt with:', email, password);
    };

    return (
      <motion.div 
        className="auth-form login-form"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="auth-title">Sign In</h2>
        <p className="auth-subtitle">Sign in to your account to continue</p>
        <form onSubmit={handleSubmit} className="auth-form-inner">
          <div className="auth-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="auth-forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="auth-submit">Sign In</button>
        </form>
        <p className="auth-toggle">
          Don't have an account? 
          <button onClick={onToggle} className="auth-toggle-button">Sign up</button>
        </p>
        <div className="auth-social">
          <p>Or continue with</p>
          <div className="auth-social-buttons">
            {['facebook', 'twitter', 'github'].map((social) => (
              <button key={social} className={`auth-social-button ${social}`}>
                {social}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const SignUp = ({ onToggle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Sign up attempt with:', name, email, password);
    };

    return (
      <motion.div 
        className="auth-form signup-form"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Sign up for a new account</p>
        <form onSubmit={handleSubmit} className="auth-form-inner">
          <div className="auth-input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-submit">Sign Up</button>
        </form>
        <p className="auth-toggle">
          Already have an account? 
          <button onClick={onToggle} className="auth-toggle-button">Sign in</button>
        </p>
      </motion.div>
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <Login key="login" onToggle={toggleAuth} />
          ) : (
            <SignUp key="signup" onToggle={toggleAuth} />
          )}
        </AnimatePresence>
      </div>
      <motion.div 
        className="auth-sidebar"
        initial={isLogin ? { x: '100%' } : { x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="auth-sidebar-content">
          <h2>{isLogin ? "Hello, Friend!" : "Welcome Back"}</h2>
          <p>
            {isLogin 
              ? "Enter your personal details and start your journey with us" 
              : "Enter your details and start your journey with us"}
          </p>
          <button onClick={toggleAuth} className="auth-sidebar-button">
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthContainer;