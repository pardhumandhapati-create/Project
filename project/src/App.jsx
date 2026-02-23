import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import ChartsSection from "./components/ChartsSection";
import DataTable from "./components/DataTable";

export default function App() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">

        {/* Top Navbar */}
        <Navbar />

        {/* Overview Section */}
        <section className="section">
          <h2>Overview</h2>
          <StatsCards />
        </section>

        {/* Charts Section */}
        <section className="section">
          <h2>Analytics</h2>
          <ChartsSection />
        </section>

        {/* Recent Students Table */}
        <section className="section">
          <h2>Recent Students</h2>
          <DataTable />
        </section>

        {/* Settings Section */}
        <section className="section">
          <h2>Settings</h2>
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