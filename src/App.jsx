import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LessonView from './components/LessonView';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">English100</div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/day/:id" element={<LessonView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
