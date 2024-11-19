import React from "react";
import { Outlet } from "react-router-dom";

import { MainStyled, OutletStyled, RootElementStyled } from "./styled";

import Header from "@components/shared/Header/Header";
import Navigation from "@components/shared/Navigation/Navigation";

const RootElement = () => (
  <RootElementStyled>
    <Header />
    <Navigation />
    <MainStyled>
      <OutletStyled>
        <Outlet />
      </OutletStyled>
    </MainStyled>
  </RootElementStyled>
);

RootElement.propTypes = {};

export default RootElement;
