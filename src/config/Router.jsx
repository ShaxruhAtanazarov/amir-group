import React from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "hoc";

// components
import { Layout } from "components/Layout";

// Route pages ########################
import {
  Home,
  NotFound,
  GoodsPage,
  OrdersPage,
  ReviewsPage,
  GoodDetails,
  UserAccountPage,
  ConfirmOrdersPage,
} from "pages";

// routes array #######################
const route = [
  { path: "/", element: <Home /> },
  { path: "/goods", element: <GoodsPage /> },
  { path: "/orders", element: <OrdersPage /> },
  { path: "/reviews", element: <ReviewsPage /> },
  {
    path: ":pathname/goods-details/:id/:product_name",
    element: <GoodDetails />,
  },
  { path: "/confirm-order", element: <ConfirmOrdersPage /> },
];

const Router = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        {route.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/user-account"} element={<UserAccountPage />} />
      </Routes>
    </Layout>
  );
};

export default Router;
