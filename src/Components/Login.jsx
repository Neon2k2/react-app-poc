import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      // Proceed with login
      console.log('Login successful');
      handleSubmitForm(); // Redirect if fields are filled
    } else {
      setErrors(errors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmitForm = () => {
    // Check if both fields are filled
    if (formData.username.trim() && formData.password.trim()) {
      navigate("/product");
    }
  };

  return (
    <div className="login-wrapper">
        <h1 className="page-title">Login</h1>
        <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">User Name</Form.Label>
          <Form.Control type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span className='error-msg'>{errors.username}</span>}
      </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <span className='error-msg'>{errors.password}</span>}
            </Form.Group>
            <button className="btn common-btn" type="submit">SIGN IN</button>
        </form>
        <p className="login-para-link"><Link to={'/'} className="login-link">Forgot Password</Link></p>
        <p className="login-para-link">Don't have an account? <Link to={'/'} className="login-link">Sign up</Link></p>
    </div>
  );
}

export default Login;
