import { Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing/ProductListing";
import SignIn from "./components/authentication/Signin/Signin";
import SignUp from "./components/authentication/Signup/SignUp";
import { useContext } from "react";
import AuthContext from "./context/authContext";
import { Navigate } from "react-router-dom";
function App() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Routes>
        {auth.token ? (
          <Route path="/product-listing" element={<ProductListing />} />
        ) : (
          <Route path="*" element={<Navigate to="/sign-in" />} />
        )}

        {/* {!auth.token && (
          <> */}
        <Route
          path="/sign-in"
          element={auth.token ? <Navigate to="/product-listing" /> : <SignIn />}
        />
        <Route
          path="/sign-up"
          element={auth.token ? <Navigate to="/product-listing" /> : <SignUp />}
        />
        {/* </>
        )} */}
      </Routes>
    </>
  );
}

export default App;
