import { Helmet } from "react-helmet-async";
import FormPage from "../../../UI/FormComponents/FormPage/FormPage";
import FormMessage from "../../../UI/FormComponents/FormMessage/FormMessage";
import Form from "../../../UI/FormComponents/Form/Form";
import InputContainer from "../../../UI/FormComponents/InputContainer/InputContainer";
import Input from "../../../UI/FormComponents/Input/Input";
import FormButton from "../../../UI/FormComponents/FormButton/FormButton";
import { useContext, useState } from "react";
import API from "../../../utils/api";
import toastMsg from "../../../utils/DisplayToast";
import axios from "axios";
import AuthContext from "../../../context/authContext";

const SignIn = () => {
  const { setAuthData } = useContext(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event, name) {
    const value = event.target.value.trim();
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validation(e) {
    setEmailError("");
    setPasswordError("");
    e.preventDefault();
    const emailInput = e.currentTarget["signin-email"];
    const passwordInput = e.currentTarget["signin-password"];
    const email = formData.email;
    const password = formData.password;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Invalid Email");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password should have more than 8 characters");
      return;
    }
    requestSignin(emailInput, passwordInput);
  }
  async function requestSignin(emailInput, passwordInput) {
    emailInput.disabled = true;
    passwordInput.disabled = true;
    const { email, password } = formData;
    try {
      const res = await axios.post(API.LOGIN, {
        email,
        password,
      });

      const { error, token } = res.data;
      if (error) {
        toastMsg("error", error);
      } else {
        setAuthData(email, token);
        toastMsg("success", "Sign In Success !!");
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error, "api error");
      toastMsg("error", "We are Facing some issues please try again later...");
    } finally {
      emailInput.disabled = false;
      passwordInput.disabled = false;
    }
  }
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign In to your Account" />
      </Helmet>
      <div className="min-h-[inherit] flex justify-center items-center">
        <FormPage>
          <FormMessage
            header="Sign in to your account"
            subtext="Or"
            routetext="register a new account"
            route="/sign-up"
          />
          <Form submitFunction={validation}>
            <InputContainer>
              <Input
                id="signin-email"
                label="Email Address"
                type="text"
                errorMessage={emailError}
                value={formData.email}
                onChange={(e) => changeHandler(e, "email")}
              />
              <Input
                id="signin-password"
                label="Password"
                type="password"
                errorMessage={passwordError}
                value={formData.password}
                onChange={(e) => changeHandler(e, "password")}
              />
            </InputContainer>
            <FormButton type="submit" label="Sign In" />
          </Form>
        </FormPage>
      </div>
    </>
  );
};

export default SignIn;
