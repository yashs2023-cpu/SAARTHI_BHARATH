import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/auth.js';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authService.isAuthenticated()) {
      setUser(authService.getCurrentUser());
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const result = authService.login(email, password);
    if (result.success) {
      setUser(result.user);
      setIsAuthenticated(true);
      return result;
    }
    return result;
  };

  const register = (name, email, phone, password, language) => {
    const result = authService.register(name, email, phone, password, language);
    if (result.success) {
      return result;
    }
    return result;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
