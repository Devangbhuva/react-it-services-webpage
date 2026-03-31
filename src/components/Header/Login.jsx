import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields required");
      return;
    }

    if (!isLogin && !form.name) {
      setError("Name required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be 6+ characters");
      return;
    }

    setError("");

    try {

      if (isLogin) {

        const res = await axios.post("http://localhost:5000/api/login", {
          email: form.email,
          password: form.password
        });

        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          alert("Login Success ✅");
          navigate("/admin");
        } else {
          alert(res.data.message);
        }

      } else {

        const res = await axios.post("http://localhost:5000/api/signup", {
          name: form.name,
          email: form.email,
          password: form.password
        });

        alert(res.data.message);
        setIsLogin(true);

      }

    } catch (err) {
      console.log(err);
      alert("Server Error");
    }

  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>{isLogin ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>

        </form>

        <p className="switch">
          {isLogin ? "Don't have account?" : "Already have account?"}

          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;