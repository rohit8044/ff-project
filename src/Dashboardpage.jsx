import React, { useState, useEffect } from "react";
import "./Dashboardpage.css";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Dashboardpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  const isDashboardHome = location.pathname === "/dashboard";

  // Auto-hide sidebar when navigating
  useEffect(() => {
    if (location.pathname !== "/dashboard") {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="app">

      {/* Top Bar */}
      <div className="topbar">
        <div className="logo">
          <span className="logo-icon"></span>
          ROHIT
        </div>

        <div className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Layout */}
      <div className="container">

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : "hidden"}`}>
          <div className="logouser"></div>
          <h1 className="dashboardheding">MY DASHBOARD</h1>
          <Link className="link" to="manageaccount" >Manage Account</Link>
          <Link className="link" to="phone">Hack Download</Link>
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
    </div>
  );
}




