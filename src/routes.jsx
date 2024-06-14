import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LodgingDetailPage from "./pages/LodgingDetailPage";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/lodging/:id", element: <LodgingDetailPage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;