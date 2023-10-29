import { useCookie } from "./useCookie";

export const useAuth = () => {
  const [token, setToken] = useCookie("vaux-staff-token", null);

  const login = async (token: any) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return { token, login, logout };
};
