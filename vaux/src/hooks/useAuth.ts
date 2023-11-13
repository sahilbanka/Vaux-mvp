import { useCookie } from "./useCookie";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const [token, setToken] = useLocalStorage("vaux-staff-token", JSON.stringify(null));
  const [userId, setUserId] = useLocalStorage('userId', JSON.stringify(null));


  const login = async (token: any) => {
    setToken(token);
  };

  const logout = () => {
    window.localStorage.removeItem('vaux-staff-token');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('userDetails');
  };

  return { token, userId, login, logout };
};
