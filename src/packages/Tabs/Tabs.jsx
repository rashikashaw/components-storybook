import { Tab } from "../../packages/Tabs/Tab";
import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  height: 50%;
  width: 80%;
  display: block;
  justify-content: center;
  align-items: flex-start;
  border: grey solid 1px;
  background-color: #DEDAF9;
`;

const Header = styled.div`
border-bottom: black solid 1px;
height: 10%;
width: 90%;
background-color: #DEDAF9;
justify-content: center;
align-items: center;
display: flex;
padding:2px;
margin: auto;
`;

const BodyWrapper = styled.div`
height: 80%;
width: 90%;
margin: auto;
padding: 20px;
`;

export const Tabs = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const onTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };
  return(
    <Wrapper>
        <Header>
          {data.map((item, i)=>(
              <Tab key={item.label} label={item.label} selected={i===selectedTab} onTabClick={() => onTabClick(i)}/>
          ))}
        </Header>
        <BodyWrapper>{data[selectedTab].body}</BodyWrapper>   
    </Wrapper>
  );
};