import { useMutation, useQueryClient } from "react-query";
import { API_URL, ENDPOINTS } from "../api.config";
import axios from "axios";

export const useDelete = () => {
  const queryClient = useQueryClient();
  const api = `${API_URL}${ENDPOINTS.DELETE}`;
  const token = localStorage.getItem("token");

  const deleteUsers = async (dto: { users: number[] }) =>
    await axios.delete(api, {
      data: dto,
      headers: { Authorization: `Bearer ${token}` },
    });

  return useMutation(deleteUsers, {
    onSuccess() {
      queryClient.invalidateQueries(["users"]);
    },
  });
};
