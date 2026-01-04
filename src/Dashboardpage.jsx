import React, { useState, useEffect } from "react";
import "./Dashboardpage.css";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Dashboardpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isDashboardHome = location.pathname === "/dashboard";

  // Sidebar close on route change
useEffect(() => {
   setSidebarOpen(false);
  if (location.pathname.startsWith("/dashboard")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [location.pathname]);

  return (
    <div className="app">
      
      {/* Top Bar */}
      <div className="topbar">
        

        <div
          className="menu-icon"
          onClick={() => setSidebarOpen(true)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="logo">ROHIT</div>
      </div>
            
      {/* Overlay */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          ✖
        </button>

        <Link to="/dashboard" className="linKheading">
          Dashboard
        </Link>

        <Link to="manageaccount" className="link">
          Manage Account
        </Link>

        <Link to="phone" className="link">
          Hack Download
        </Link>
      </div>

      {/* Main Content */}
      <div className="content">
        {isDashboardHome && (
          <div className="dashboard">
            <h1>WELCOME PLAYERS</h1>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
