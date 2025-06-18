import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CreateProducts = lazy(() => import("../createProducts/CreateProducts"));
const Products = lazy(() => import("../products/Products"));

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/create-products" element={<CreateProducts />}>
        CreateProducts
      </Route>
      <Route path="products" element={<Products />}>
        Products
      </Route>
    </Routes>
  );
};

export default React.memo(MainRouters);
