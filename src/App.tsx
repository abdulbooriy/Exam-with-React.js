import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
// import MainRouters from "./pages/layout/index";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Dashboard />
      {/* <MainRouters /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default React.memo(App);
