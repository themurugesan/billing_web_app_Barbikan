import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreateInvoice from './components/CreateInvoice';
import './Styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <CreateInvoice />
      </div>
    </div>
  );
};

export default App;
