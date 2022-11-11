import React from "react";

// components
import { Header } from "./Header";
import { Aside } from "components/Aside";
import { Container } from "components/Container";

const Layout = ({ children }) => {
  return (
    <div className="h-[100vh] flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Aside />
        <main className="ml-[265px] pl-[20px] pr-[60px] pt-[90px] pb-[20px] h-full w-full rounded-[6px] ">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default Layout;
