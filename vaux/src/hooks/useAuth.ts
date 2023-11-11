import { useCookie } from "./useCookie";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const [token, setToken] = useLocalStorage("vaux-staff-token", JSON.stringify(null));
  const [userId, setUserId] = useLocalStorage('userId', JSON.stringify(null));


  const login = async (token: any) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  return { token, userId, login, logout };
};
