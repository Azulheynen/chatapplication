import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/layouts/AuthLayout";
import { Login } from "./pages/layouts/Login";
import { Sign } from "./pages/layouts/Sign.tsx";
import { Home } from "./pages/layouts/Home.tsx";

export const router = createBrowserRouter([
    {
 element: <AuthLayout />,
        children: [
            {path: "/login", element: <Login />},
            {path: "/sign",  element: <Sign />},
            {path: "/" , element: <Home />} 
        ]
    }
])