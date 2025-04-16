import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import AdminLogin from "../screens/Box/sections/Admin/AdminLogin";
import AdminDashboard from "../screens/Box/sections/Admin/AdminDashBoard";
import ProtectedRoute from "../components/ui/Admin/ProtectedRoute";
import { Box } from "../screens/Box";
import { About } from "../screens/Box/About";
import { Outlet } from "react-router-dom";

// Create a layout component with AuthProvider
const RootLayout = () => (
  <AuthProvider>
    <Outlet /> {/* This renders the matched child route */}
  </AuthProvider>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Box />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/admin/login",
        element: <AdminLogin />,
      },
      {
        path: "/admin/dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;