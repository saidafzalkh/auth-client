import { useMutation, useQueryClient } from "react-query";
import { API_URL, ENDPOINTS } from "../api.config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useToggle = (type: "block" | "unblock") => {
  const queryClient = useQueryClient();
  const api = `${API_URL}${
    type === "block" ? ENDPOINTS.BLOCK : ENDPOINTS.UNBLOCK
  }`;
  const token = localStorage.getItem("token");
  const userID = Number(localStorage.getItem("userID"));
  const navigateTo = useNavigate();

  const toggleUsers = async (dto: { users: number[] }) => {
    if (dto.users.includes(userID)) {
      localStorage.clear();
      type === "block" && navigateTo("/signin");
    }
    return await axios.put(api, dto, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return useMutation(toggleUsers, {
    onSuccess() {
      queryClient.invalidateQueries(["users"]);
    },
  });
};
