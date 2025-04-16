import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const { pathname } = useLocation();
  const isSeachPage = pathname == "/search";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {!isSeachPage && <Header />}
      <Outlet />
      {!isSeachPage && <Footer />}
    </div>
  );
};

export default Layout;
