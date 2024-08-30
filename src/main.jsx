import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/authentcation/Signin/Signin.jsx";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import SignUp from "./components/authentcation/Signup/SignUp.jsx";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "./components/layout/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RootLayout>
        <RouterProvider router={router} />
      </RootLayout>
    </HelmetProvider>
  </StrictMode>
);
