import { Navigate } from "react-router-dom";

// Role-based route protection
export const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || "";

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />; // Redirect to login if not authorized
  }

  return children; // Render the admin-only page if authorized
};
