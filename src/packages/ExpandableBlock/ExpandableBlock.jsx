import styled from "@emotion/styled";
import React, { useState } from "react";
import { Provider } from "./Provider";

const BodyWrapper = styled.div`
  max-height: ${(p) => (p.isOpen ? "200px" : "0px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  border-top: solid lightgrey;
  transition: max-height 200ms ease-in-out;
  padding-left: 8px;
  padding-right: 8px;
  background: white;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
`;

export const ExpandableBlock = ({
  className,
  header,
  body,
  bodyClassName,
  initiallyOpen = false,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const onBlockToggle = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (onToggle) onToggle(newIsOpen);
  };
  const dataTest = isOpen ? 'expandable-block-open' : 'expandable-block-close';
  return (
    <Provider value={{ isOpen, toggle: onBlockToggle }}>
      <Wrapper className={className} data-testid={dataTest}>
        <div 
          onClick={onBlockToggle}
          data-testid={'expandable-block-header'}
        >{header}</div>
        <BodyWrapper 
          className={bodyClassName} 
          isOpen={isOpen}
          data-testid={'expandable-block-body'}  
        >
          {body}
        </BodyWrapper>
      </Wrapper>
    </Provider>
  );
};
