import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ExpandableBlock, useExpandableBlock } from "../../packages/ExpandableBlock";
import { LoremIpsum } from "react-lorem-ipsum";
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import { Preview } from '../../components/Preview/Preview';

const BLOCK_CLASS_NAME = "block-class";
const BODY_CLASS = "body-class";

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  .${BLOCK_CLASS_NAME} {
    margin-bottom: 8px;
    max-width: 500px;
  }
  .${BODY_CLASS} {
    display: flex;
    flex-direction: row;
  }
`;
const HeaderWrapper = styled.div`
  font-size: 20px;
  font-family: Roboto;
  height: 32px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #DEDAF9;
`;

const HeaderText = styled.div`
  margin-left: 8px;
`;
const Header = ({ block, blockOpen }) => {
  const { isOpen, toggle } = useExpandableBlock();
  useEffect(() => {
    if (blockOpen && blockOpen !== block && isOpen) toggle();
  }, [isOpen, block, blockOpen, toggle]);
  return (
    <HeaderWrapper>
      {isOpen && <ExpandMore />}
      {!isOpen && <ChevronRight />}
      <HeaderText>This is the header</HeaderText>
    </HeaderWrapper>
  );
};
const Overview = () => {
  const [blockOpen, setBlockOpen] = useState(0);
  const onBlock1Open = (isOpen) => {
    if (isOpen) {
      setBlockOpen(1);
      console.log(blockOpen);
    }
  };
  const onBlock2Open = (isOpen) => {
    if (isOpen) {
      setBlockOpen(2);
      console.log(blockOpen);
    }
  };
  return (
    <Preview>
      <Wrapper>
        <ExpandableBlock
          className={BLOCK_CLASS_NAME}
          header={<Header block={1} blockOpen={blockOpen} />}
          body={<LoremIpsum p={2} />}
          bodyClassName={BODY_CLASS}
          onToggle={onBlock1Open}
        />
        <ExpandableBlock
          className={BLOCK_CLASS_NAME}
          header={<Header block={2} blockOpen={blockOpen} />}
          body={<LoremIpsum p={2} />}
          bodyClassName={BODY_CLASS}
          onToggle={onBlock2Open}
        />
      </Wrapper>
    </Preview>
  );
}

export default Overview;