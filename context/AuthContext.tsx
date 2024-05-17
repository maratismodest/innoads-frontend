'use client';
import { UserDTO } from '@/types';
// import checkBan from '@/utils/api/checkBan';
import fetchUser from '@/utils/api/prisma/fetchUser';
import { User } from '@prisma/client';
import * as jose from 'jose';
import { createContext, ReactNode, useEffect, useState } from 'react';

type authContextType = {
  user: UserDTO | User | undefined;
  login: (user: UserDTO | User, token: string) => void | undefined;
  logout: () => void | undefined;
};

const authContextDefaultValues: authContextType = {
  user: undefined,
  login: () => {},
  logout: () => {},
};
export const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserDTO | User | undefined>(undefined);
  useEffect(() => {
    console.log('user', user);
  }, [user]);
  const checkToken = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded: jose.JWTPayload = await jose.decodeJwt(token);
        const fetchedUser = await fetchUser(decoded.id as number);
        if (fetchedUser) {
          login(fetchedUser, token);
        } else {
          logout();
          alert(
            'Вы слишком давно авторизовывались: попробуйте перезапустить страницу и авторизоваться заново'
          );
        }
      }
      return;
    } catch (e) {
      console.log('e', e);
    }
  };

  // @ts-ignore
  useEffect(() => {
    checkToken();
    return () => checkToken();
  }, []);

  const login = (user: UserDTO | User, token: string) => {
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(undefined);
  };

  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
