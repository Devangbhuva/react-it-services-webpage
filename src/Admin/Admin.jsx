import React, { useEffect, useState } from "react";
import Services from "./Services";
import AddService from "./AddService";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import Users from "./Users";

const Admin = () => {
  const [page, setPage] = useState("dashboard");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
  }, []);
  return (
    <div className="admin-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin</h2>

        <ul>
          <li onClick={() => setPage("dashboard")}>Dashboard</li>
          <li onClick={() => setPage("users")}>Users</li>
          <li onClick={() => setPage("services")}>Services</li>
          <li onClick={() => setPage("addService")}>Add Service</li>
          <li onClick={logout}>Logout</li>
        </ul>
      </div>

      {/* Content */}
      <div className="main-content">

        {page === "dashboard" && <h1>Welcome Admin 👋</h1>}
        {page === "users" && <Users />}
        {page === "services" && <Services />}
        {page === "addService" && <AddService />}

      </div>

    </div>
  );
};

export default Admin;