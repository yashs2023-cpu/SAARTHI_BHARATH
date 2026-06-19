import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login({ onSuccess, onSwitchTab }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }
    const result = login(email, password);
    if (result.success) {
      onSuccess();
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <p style={styles.switchText}>
        Don't have account?{' '}
        <button onClick={() => onSwitchTab('register')} style={styles.link}>
          Register
        </button>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    textAlign: 'center',
    color: 'var(--royal-indigo)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    padding: '12px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: "'Poppins', sans-serif",
  },
  button: {
    padding: '12px',
    background: 'var(--imperial-gold)',
    color: 'var(--royal-indigo-deep)',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  error: {
    color: '#e11d48',
    fontSize: '13px',
    margin: '0',
  },
  switchText: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
  },
  link: {
    background: 'none',
    border: 'none',
    color: 'var(--imperial-gold)',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};
