import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (email, password) => loginApi(email, password),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log("Error ", error);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
