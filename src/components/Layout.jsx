import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [MontrerAPropos, setShowAPropos] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ MontrerAPropos, setShowAPropos }} />
      </main>
      <Footer setShowAPropos={setShowAPropos} />
    </>
  );
}

export default Layout;
