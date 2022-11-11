import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

// components
import { PageTop } from "components/PageTop";
import { BreadCrumb } from "components/BreadCrumb";
import { SearchPannel } from "components/SearchPannel";
import { PaginationData } from "components/PaginationData";

const ConfirmOrdersPage = () => {
  const fakePathnames = [
    { title: "", pathname: "/" },
    { title: "fakepath one", pathname: "/fakepath-one" },
    { title: "fakepath two", pathname: "/fakepath-two" },
  ];

  return (
    <>
      <Helmet>
        <title>E-com </title>
      </Helmet>
      <div className="mb-[30px]">
        <BreadCrumb pathnames={fakePathnames} />
      </div>
      <div className="mb-[20px]">
        <PageTop title="Оформить заказ" />
      </div>
      <div className="mb-[30px]">
        <SearchPannel />
      </div>
      <PaginationData />
    </>
  );
};

export default ConfirmOrdersPage;
