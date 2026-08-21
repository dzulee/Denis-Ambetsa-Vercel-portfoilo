// src/components/powerBi/salesdashboard.jsx
import React from "react";
import { DashboardData } from '../data/dashboardData';

const PowerBi = () => {
  return (
    <div className="dashboard-container">
      {DashboardData.map((dashboard) => (
        <iframe 
          key={dashboard.id} 
          title={dashboard.name} 
          width="100%" 
          height="500px" 
          src={dashboard.url}
          frameBorder="0" 
          allowFullScreen={true}>
        </iframe>
      ))}
    </div>
  );
};

export default PowerBi;