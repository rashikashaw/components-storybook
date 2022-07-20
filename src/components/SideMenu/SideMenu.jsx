import React from "react";
import styled from "@emotion/styled";
import { MenuItem } from "./MenuItem";

const StyledSideMenu = styled.div`
  height: 100%;
  width: 20%;
  position: absolute;
  top: 64px;
  left: 0px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid;
  align-items: center;
  margin-top: 2px;
`;

export const SideMenu = ({ data }) => (
  <StyledSideMenu>
    {
      data.map((item, i) => <MenuItem label={item.label} key={`menu-item-${i}`} path={item.path}/>)
    }
  </StyledSideMenu>
);
