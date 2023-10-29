import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const openAnalytics = () => {
        const analyticsUrl = "https://example.com/analytics"; // Replace with the actual URL you want to redirect to
        window.open(analyticsUrl);
    };
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/analytics">
        <button onClick={openAnalytics}>View Analytics</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const handleLogout = () => {
  // You can implement your logout logic here, e.g., using Auth0 or another authentication library
  alert('Logout clicked'); // Replace with actual logout logic
};

const handleAnalytics = () => {

}

export default Dashboard;