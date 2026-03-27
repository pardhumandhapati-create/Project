import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import ChartsSection from "./components/ChartsSection";
import DataTable from "./components/DataTable";
import Login from "./components/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="dashboard">
      <div className="centered-dashboard-text">
        <span className="highlight">Student Performance Dashboard</span>
      </div>

      <Sidebar />

      <div className="overview-top-right">
        <section className="section">
          <h2>Overview</h2>
          <StatsCards />
        </section>
      </div>

      <div className="main-content"></div>

      <div className="bottom-left-sections">
        <section className="section">
          <h2><span className="highlight">Analytics</span></h2>
          <ChartsSection />
        </section>

        <section className="section">
          <h2><span className="highlight">Recent Students</span></h2>
          <DataTable />
        </section>

        <section className="section">
          <h2><span className="highlight">Settings</span></h2>
          <div className="settings-card">
            <p>Profile Settings</p>
            <p>Theme Preferences</p>
            <p>Notification Controls</p>
          </div>
        </section>
      </div>
    </div>
  );
}