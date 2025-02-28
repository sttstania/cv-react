import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Accueil from "../pages/Accueil";
import Service from "../pages/Service";
import Realisation from "../pages/Realisation";
import Blog from "../pages/Blog";
import MeContacter from "../pages/MeContacter";
import MentionsLegales from "../pages/MentionsLegales";
import GitHub from "../pages/GitHub";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Accueil /> },
      { path: "/Service", element: <Service /> },
      { path: "/Realisation", element: <Realisation /> },
      { path: "/Blog", element: <Blog /> },
      { path: "/MeContacter", element: <MeContacter /> },
      { path: "/MentionsLegales", element: <MentionsLegales /> },
      { path: "/GitHub", element: <GitHub /> },
    ],
  },
]);

export default router;
