import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

interface AuthProps {
    children: ReactNode;
}

interface AuthProviderData {
    authToken: string;
    logout: () => void;
    signIn: (userData: User) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children } : AuthProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("token") || ""
  );
  const signIn = (userData: User) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
