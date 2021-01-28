import React from "react";
import AppRouter from "../AppRouter";
import Footer from "../component/Footer";

function Hoc({ children }) {
  return (
    <div>
      <AppRouter />
      {children}
      <Footer />
    </div>
  );
}

export default Hoc;
