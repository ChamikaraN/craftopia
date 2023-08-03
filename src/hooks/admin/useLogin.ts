import { useMutation } from "react-query";
import { toast } from "react-toastify";
import logEvent from "@utils/logger";
import { ERROR, INFO } from "@constants/sanityConst";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/AuthService";
import { LoginCredentials } from "@/types";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation<string, Error, LoginCredentials>(login, {
    onSuccess: async (data) => {
      toast.success("Successfully Login 👌");
      await logEvent(INFO, "Login Success", {
        additionalData: JSON.stringify(data),
      });
      navigate("/admin/dashboard");
    },
    onError: async (error: Error) => {
      toast.error("Login failed. Please check your credentials.");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};
