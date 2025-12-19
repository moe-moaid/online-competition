'use client';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

type AuthType = {
  token: string;
  setToken: React.Dispatch<string>;
};

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string>('');
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext should be used only inside AuthProvider');
  }

  return context;
};
