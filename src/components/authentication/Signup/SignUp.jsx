import { Helmet } from "react-helmet-async";
import FormPage from "../../../UI/FormComponents/FormPage/FormPage";
import FormMessage from "../../../UI/FormComponents/FormMessage/FormMessage";
import Form from "../../../UI/FormComponents/Form/Form";
import InputContainer from "../../../UI/FormComponents/InputContainer/InputContainer";
import Input from "../../../UI/FormComponents/Input/Input";
import FormButton from "../../../UI/FormComponents/FormButton/FormButton";
import { useState } from "react";
import API from "../../../utils/api";
import toastMsg from "../../../utils/DisplayToast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
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
    requestSignup(emailInput, passwordInput);
  }
  async function requestSignup(emailInput, passwordInput) {
    emailInput.disabled = true;
    passwordInput.disabled = true;
    const { email, password } = formData;
    try {
      const res = await axios.post(API.SIGNUP, {
        email,
        password,
      });
      const { data } = res.data;
      if (data.result === "OK") {
        toastMsg("success", "Success, Please Sign-in to continue !!");
        setFormData({
          email: "",
          password: "",
        });
        navigate("/sign-in");
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
        <title>Sign Up</title>
        <meta name="description" content="Sign In to your Account" />
      </Helmet>
      <div className="min-h-[inherit] flex justify-center items-center">
        <FormPage>
          <FormMessage
            header="Create a new account"
            subtext="Or"
            routetext="login to your existing account"
            route="/sign-in"
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

export default SignUp;
