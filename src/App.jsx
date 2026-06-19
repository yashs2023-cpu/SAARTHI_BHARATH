import React, { useState, useContext } from 'react';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import { ModeProvider } from './contexts/ModeContext';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import './styles/globals.css';

function AppContent() {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const [page, setPage] = useState('landing');

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        {page === 'landing' && <Landing onGetStarted={() => setPage('login')} />}
        {page === 'login' && (
          <Login
            onSuccess={() => setPage('dashboard')}
            onSwitchTab={() => setPage('register')}
          />
        )}
      </div>
    );
  }

  return <Dashboard />;
}

export default function App() {
  return (
    <AuthProvider>
      <ModeProvider>
        <AppContent />
      </ModeProvider>
    </AuthProvider>
  );
}
