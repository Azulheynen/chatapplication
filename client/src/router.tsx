import { Outlet, createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/layouts/AuthLayout";
import { Login } from "./pages/layouts/Login";
import { Signup } from "./pages/layouts/Signup.tsx";
import { Home } from "./pages/layouts/Home.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

export const router = createBrowserRouter([
  {
    element: <ContextWreapper />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
          { path: "/", element: <Home /> },
        ],
      },
    ],
  },
]);

function ContextWreapper() {
    return <AuthProvider>
    <Outlet />;
    </AuthProvider>
}
