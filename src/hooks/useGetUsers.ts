import axios from "axios";
import { API_URL, ENDPOINTS } from "../api.config";
import { useQuery } from "react-query";
import { useUserStore } from "../store/useUsersStore";
import { useNavigate } from "react-router-dom";

export const useGetUsers = () => {
  const api = `${API_URL}${ENDPOINTS.GETALL}`;
  const token = localStorage.getItem("token");
  const getAll = async () =>
    await axios.get(api, { headers: { Authorization: `Bearer ${token}` } });
  const setUsers = useUserStore((set) => set.setUsers);
  const navigateTo = useNavigate();

  return useQuery(["users"], getAll, {
    onSuccess(data) {
      console.log("catch");
      setUsers(data.data);
    },
    onError() {
      navigateTo("/signin");
    },
    refetchOnWindowFocus: false,
  });
};
