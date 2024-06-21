import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LodgingDetail from "./pages/LodgingDetail";
import About from "./pages/About";
import LayoutError from "./pages/LayoutError";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <LayoutError />,
    children: [
      { index: true, element: <Home /> },
      { path: "/lodging/:id", element: <LodgingDetail />, id: "lodging" },
      { path: "/about", element: <About /> },
      { path: "/error", element: <Error /> },
    ],
  },
]);

export default router;