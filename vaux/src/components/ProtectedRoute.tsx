import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { AuthContext } from "context/AuthContext";

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { user, setUser }: any = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
};