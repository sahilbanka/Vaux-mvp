import { useCookie } from "./useCookie";

export const useAuth = () => {
  const [token, setToken] = useCookie("vaux-staff-token", JSON.stringify(null));

  const login = async (token: any) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  return { token, login, logout };
};
