import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserRole, User } from '../types';

interface AppContextType {
  user: User | null;
  role: UserRole;
  setRole: (role: UserRole) => void;
  setUser: (user: User | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>('ADMIN');
  const [user, setUser] = useState<User | null>({
    id: 'admin1',
    name: 'Admin EscolarGo',
    email: 'admin@escolargo.com',
    role: 'ADMIN'
  });

  const handleSetRole = (newRole: UserRole) => {
    setRole(newRole);
    // Update mock user based on role
    if (newRole === 'ADMIN') {
      setUser({ id: 'admin1', name: 'Admin EscolarGo', email: 'admin@escolargo.com', role: 'ADMIN' });
    } else if (newRole === 'DRIVER') {
      setUser({ id: 'd1', name: 'Roberto Silva', email: 'roberto@escolargo.com', role: 'DRIVER' });
    } else {
      setUser({ id: 'p1', name: 'Mariana Oliveira', email: 'mariana@email.com', role: 'PARENT' });
    }
  };

  return (
    <AppContext.Provider value={{ user, role, setRole: handleSetRole, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
