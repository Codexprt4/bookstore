import React from "react";
import AppRouter from "../AppRouter";
import Footer from "../component/Footer";

function Hoc({ children }) {
  return (
    <>
      <AppRouter />
      {children}
      <Footer />
    </>
  );
}

export default Hoc;
