import { createContext, useState, useContext, useEffect } from "react";
import { getMe } from "../api/authApi";
import {toast } from 'react-toastify';

const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getMe(token).then((rs) => {
      setUser(rs.data);
    });
  }, []);

  const logout = () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      toast.success('logout Success')
    }catch(err) {
      toast.error('logout Failed')
    }
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
