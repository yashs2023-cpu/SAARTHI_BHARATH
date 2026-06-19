import React from 'react';

export default function Landing({ onGetStarted }) {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Saarthi</h1>
        <p style={styles.subtitle}>Royal Inclusive AI Ecosystem for Bharat</p>
        <p style={styles.description}>
          India's emotionally intelligent, voice-first digital companion that simplifies technology
        </p>
        <button style={styles.button} onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'var(--pearl-ivory)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  hero: {
    textAlign: 'center',
    maxWidth: '600px',
  },
  title: {
    fontSize: '64px',
    fontWeight: 'bold',
    color: 'var(--royal-indigo)',
    marginBottom: '20px',
    fontFamily: "'Cinzel', serif",
  },
  subtitle: {
    fontSize: '24px',
    color: 'var(--imperial-gold)',
    marginBottom: '16px',
    fontWeight: '600',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  button: {
    padding: '14px 40px',
    fontSize: '16px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #E8C84A 0%, #D4AF37 100%)',
    color: '#1E1F57',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
};
