import { useEffect, useState } from "react";
import AuthContext from "./authContext.jsx";
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: "",
    token: "",
  });
  function setAuthData(email, token) {
    console.log(email, token, "|||");
    setAuth({
      email,
      token,
    });
  }

  useEffect(() => {
    console.log(auth);
  }, [auth]);
  function clearAuthData() {
    setAuth({
      email: "",
      token: "",
    });
  }
  const store = {
    auth,
    setAuthData,
    clearAuthData,
  };
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
