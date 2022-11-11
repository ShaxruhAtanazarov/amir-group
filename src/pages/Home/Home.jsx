import React from "react";
import { Helmet } from "react-helmet-async";

// components
import { PageTop } from "components/PageTop";
import { BreadCrumb } from "components/BreadCrumb";
import { SearchPannel } from "components/SearchPannel";

const Home = () => {
  const fakePathnames = [
    { title: "", pathname: "/" },
    { title: "fakepath one", pathname: "/fakepath-one" },
    { title: "fakepath two", pathname: "/fakepath-two" },
  ];

  return <>Home</>;
};

export default Home;
