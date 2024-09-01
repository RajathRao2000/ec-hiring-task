import { useState } from "react";
import AuthContext from "./authContext.jsx";
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: "",
    token: "",
  });
  function setAuthData(email, token) {
    setAuth((prev) => ({ ...prev, email, token }));
    localStorage.setItem("auth", JSON.stringify({ email, token }));
  }

  function clearAuthData() {
    setAuth({
      email: "",
      token: "",
    });
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ auth, setAuthData, clearAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
