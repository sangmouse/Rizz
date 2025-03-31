import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutRoot() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

/**
 * - header
 * - footer
 */
