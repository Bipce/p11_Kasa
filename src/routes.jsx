import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LodgingDetail from "./pages/LodgingDetail";
import Error from "./pages/Error";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/lodging/:id", element: <LodgingDetail /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;