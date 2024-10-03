import axiosInstance from "@/api/axiosInstance";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { loginService, registerService } from "@/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });
  const [loading, setLoading] = useState(true);

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    const data = await registerService(signUpFormData);
  };
  const handleLoginUser = async (e) => {
    e.preventDefault();
    const data = await loginService(signInFormData);

    if (data.success) {
      console.log(data,"data");
      
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken)
      );
      setAuth({
        authenticate: true,
        user: data.data.user,
      });
    } else {
      setAuth({
        authenticate: false,
        user: null,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
