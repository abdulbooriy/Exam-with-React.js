import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CreateProducts = lazy(() => import("./createProducts/CreateProducts"));
const Products = lazy(() => import("./products/Products"));
const Colors = lazy(() => import("./colors/Colors"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const MainRouters = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />}>
        <Route path="create-products" element={<CreateProducts />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="colors" element={<Colors />}></Route>
      </Route>
    </Routes>
  );
};

export default React.memo(MainRouters);
