import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function LayoutRoot() {
  return (
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
}

/**
 * - header
 * - footer
 */
