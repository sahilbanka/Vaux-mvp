import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = async (user: any) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};
