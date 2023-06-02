import { useNavigate } from "react-router-dom";
import { API_URL, ENDPOINTS } from "../api.config";
import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { dtoInterface } from "../types/dto.interface";

export const useAuth = (signup: boolean) => {
  const api = `${API_URL}${signup ? ENDPOINTS.SIGNUP : ENDPOINTS.SIGNIN}`;
  const postAuth = async (dto: dtoInterface) => await axios.post(api, dto);
  type errorResponse = { message: string };
  const navigateTo = useNavigate();

  return useMutation(postAuth, {
    onSuccess(data) {
      !signup && localStorage.setItem("token", data?.data.access_token);
      !signup && localStorage.setItem("userName", data?.data.user.name);
      !signup && localStorage.setItem("userID", data?.data.user.id);
      navigateTo(signup ? "/signin" : "/");
    },
    onError(data: AxiosError) {
      alert((data?.response?.data as errorResponse).message);
    },
  });
};
