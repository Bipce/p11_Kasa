import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LodgingDetail from "./pages/LodgingDetail";
import Error from "./pages/Error";
import About from "./pages/About";
import { getLodgings } from "./services/api-call";

const fetchLodging = async (id) => {

};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/lodging/:id",
        element: <LodgingDetail />,
        id: "lodging",
        loader: async ({ params }) => {
          const data = await getLodgings();
          const item = data.find(x => x.id === params.id);
          if (!item) {
            throw new Response("Not found", { status: 404 });
          }
          return item;
        },
      },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;