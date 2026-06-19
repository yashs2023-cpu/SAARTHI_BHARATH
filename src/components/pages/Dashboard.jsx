import React, { useContext } from 'react';
import { ModeContext } from '../../contexts/ModeContext';

export default function Dashboard() {
  const { activeMode, lockedMode, switchMode, modes } = useContext(ModeContext);
  const modeConfig = activeMode ? modes[activeMode.toUpperCase()] : null;

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.profile}>
          <div style={styles.avatar}>👤</div>
          <h3 style={styles.profileName}>Welcome User</h3>
        </div>

        <div style={styles.modeMenu}>
          <h4 style={styles.modeTitle}>Your Modes</h4>
          {Object.values(modes).map((mode) => (
            <button
              key={mode.key}
              onClick={() => switchMode(mode.key)}
              style={{
                ...styles.modeButton,
                background: activeMode === mode.key ? mode.color : '#f0f0f0',
                color: activeMode === mode.key ? '#fff' : '#000',
              }}
            >
              {mode.label}
              {lockedMode === mode.key && ' 🔒'}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.main}>
        {modeConfig ? (
          <div>
            <h2 style={styles.title}>{modeConfig.label} Mode</h2>
            <div style={styles.features}>
              <p>Features for {modeConfig.label} coming soon...</p>
            </div>
          </div>
        ) : (
          <div style={styles.empty}>
            <p>Select a mode to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    background: 'var(--pearl-ivory)',
  },
  sidebar: {
    width: '280px',
    background: 'var(--royal-indigo)',
    color: '#fff',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  profile: {
    textAlign: 'center',
    marginBottom: '32px',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    paddingBottom: '20px',
  },
  avatar: {
    fontSize: '48px',
    marginBottom: '12px',
  },
  profileName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  modeMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  modeTitle: {
    fontSize: '12px',
    textTransform: 'uppercase',
    opacity: 0.7,
    marginBottom: '8px',
  },
  modeButton: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s',
  },
  main: {
    flex: 1,
    padding: '40px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'var(--royal-indigo)',
    marginBottom: '24px',
  },
  features: {
    background: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  empty: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#999',
    fontSize: '16px',
  },
};
