import { Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing/ProductListing";
import SignIn from "./components/authentcation/Signin/Signin";
import SignUp from "./components/authentcation/Signup/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
