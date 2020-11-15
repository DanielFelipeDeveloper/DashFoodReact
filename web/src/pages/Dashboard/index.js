import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';

import './styles.css';

function Dashboard() {
  return (
    <div className="flex-dashboard">
      <Navbar />
      <Main />
    </div>
  )
}

export default Dashboard;