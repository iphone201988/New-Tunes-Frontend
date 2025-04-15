import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout";
import AboutUs from "../pages/AboutUs";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Search from "../pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

export default router;
