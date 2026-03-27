export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2><span className="highlight">Dashboard</span></h2>
      <ul>
        <li>Overview</li>
        <li>Reports</li>
        <li><span className="highlight">Analytics</span></li>
        <li><span className="highlight">Settings</span></li>
      </ul>
    </div>
  );
}