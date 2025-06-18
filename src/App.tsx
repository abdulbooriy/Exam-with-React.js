import React from "react";
import { Toaster } from "react-hot-toast";
import MainRouters from "./pages/index";

const App = () => {
  return (
    <div>
      <MainRouters />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default React.memo(App);
