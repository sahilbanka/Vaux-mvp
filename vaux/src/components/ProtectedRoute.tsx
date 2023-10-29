import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { AuthContext } from "context/AuthContext";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { token, setToken }: any = useAuth();
  if (!token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>;
};