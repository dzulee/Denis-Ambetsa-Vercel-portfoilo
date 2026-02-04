// src/components/powerBi/salesdashboard.jsx
import React from "react";

// Add "export" here so we can use this list in Projects.jsx
export const DashboardData = [
  {
    id: 'sales-dashboard',
    name: 'Sales Dashboard', // Changed 'title' to 'name' to match your JSON structure
    url: "https://app.powerbi.com/view?r=eyJrIjoiMjU5ZDk5NjEtMTI1Ni00NzI1LTgyODQtMTkyMjNjZjI1M2IzIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" 
  },
  {
    id: 'car-models-dashboard',
    name: 'Car Models Dashboard',
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjQ0ZjQ1YzctMzU2Zi00N2Y4LWIyMmUtZjEwNzU5Y2I3MmJkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9" 
  }
];

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