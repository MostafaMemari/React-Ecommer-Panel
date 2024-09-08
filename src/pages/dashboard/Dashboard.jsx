import React from 'react';
import Cards from './Cards';

function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <Cards />
    </div>
  );
}

export default Dashboard;
