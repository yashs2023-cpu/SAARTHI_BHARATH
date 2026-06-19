import React, { createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

const MODES = {
  AMMA: { key: 'amma', label: 'Amma', color: '#F4A300' },
  BUSINESS: { key: 'business', label: 'Business', color: '#1E1F57' },
  SENIOR: { key: 'senior', label: 'Senior', color: '#7FB7BE' },
  STUDENT: { key: 'student', label: 'Student', color: '#4F46E5' },
};

export function ModeProvider({ children }) {
  const [activeMode, setActiveMode] = useState(() => {
    return localStorage.getItem('saarthi_active_mode') || null;
  });

  const [lockedMode, setLockedMode] = useState(() => {
    return localStorage.getItem('saarthi_locked_mode') || null;
  });

  useEffect(() => {
    if (activeMode) {
      localStorage.setItem('saarthi_active_mode', activeMode);
    }
  }, [activeMode]);

  useEffect(() => {
    if (lockedMode) {
      localStorage.setItem('saarthi_locked_mode', lockedMode);
    }
  }, [lockedMode]);

  const switchMode = (modeKey) => {
    if (!lockedMode || lockedMode === modeKey) {
      setActiveMode(modeKey);
    }
  };

  const lockMode = (modeKey) => {
    setLockedMode(modeKey);
    setActiveMode(modeKey);
  };

  const unlockMode = () => {
    setLockedMode(null);
  };

  const value = {
    activeMode,
    lockedMode,
    switchMode,
    lockMode,
    unlockMode,
    modes: MODES,
    getModeConfig: (modeKey) => MODES[modeKey.toUpperCase()],
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}
