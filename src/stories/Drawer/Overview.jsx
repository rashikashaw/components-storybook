import { useDrawer } from "../../packages/Drawer";
import React from "react";
import styled from "@emotion/styled";
import { LoremIpsum } from "react-lorem-ipsum";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  height: 30%
`;
const StyledButton = styled.button`
  background: #DEDAF9;
  border: 1px solid;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
  width: 100px;
  margin: 1%;
`;

const StyledLoremIpsum = styled.div`
  padding: 20px;
`;

const DrawerContent = () => (
  <StyledLoremIpsum>
    <LoremIpsum p={2}/>
  </StyledLoremIpsum>
);

const Overview = () => {
  const LeftDrawer = useDrawer();
  const RightDrawer = useDrawer();
  const TopDrawer = useDrawer();
  const BottomDrawer = useDrawer();
  return (
    <Wrapper>
      <StyledButton onClick={RightDrawer.open}>Right</StyledButton>
      <StyledButton onClick={LeftDrawer.open}>Left</StyledButton>
      <StyledButton onClick={TopDrawer.open}>Top</StyledButton>
      <StyledButton onClick={BottomDrawer.open}>Bottom</StyledButton>
      <LeftDrawer.Drawer left>
        <DrawerContent/>
      </LeftDrawer.Drawer>
      <RightDrawer.Drawer right>
        <DrawerContent/>
      </RightDrawer.Drawer>
      <TopDrawer.Drawer top>
        <DrawerContent/>
      </TopDrawer.Drawer>
      <BottomDrawer.Drawer bottom>
        <DrawerContent/>  
      </BottomDrawer.Drawer>
    </Wrapper>
  );
}
export default Overview;
