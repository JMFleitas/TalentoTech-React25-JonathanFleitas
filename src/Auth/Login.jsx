import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Add your login logic here
  };

  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          color: "#fff",
          minHeight: "75vh",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 15px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
