import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const StyledItems = styled( Link )`
  height: 40px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  :hover {
    background-color: lightblue;
  }
  background-color: ${p => p.selected ? 'lightblue' : 'white'};
`;

export const MenuItem = ({ label, path }) => {
  const { pathname } = useLocation();
  return(
    <StyledItems to={path} selected={pathname === path}>
      {label}
    </StyledItems>
  );
};
