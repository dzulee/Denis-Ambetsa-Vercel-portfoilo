// src/components/powerBi/salesdashboard.jsx
import React from "react";
import { useParams } from 'react-router-dom';
import { DashboardData } from '../data/dashboardData';

const PowerBi = () => {
  const { id } = useParams();
  const dashboard = DashboardData.find((item) => item.id === id) || DashboardData[0];

  return (
    <div className="dashboard-container">
      <h1>{dashboard.name} | AmbetsaTech Data Analytics Portfolio</h1>
      <p>Explore an interactive {dashboard.name.toLowerCase()} built by AmbetsaTech for clear, data-driven business reporting.</p>
      <iframe
        title={dashboard.name}
        width="100%"
        height="500px"
        src={dashboard.url}
        frameBorder="0"
        allowFullScreen={true}>
      </iframe>
    </div>
  );
};

export default PowerBi;