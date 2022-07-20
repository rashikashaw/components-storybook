import styled from "@emotion/styled";
import { 
  RIGHT_DRAWER_CLASS,
  LEFT_DRAWER_CLASS,
  TOP_DRAWER_CLASS,
  BOTTOM_DRAWER_CLASS,
  RIGHT_BACKDROP_CLASS,
  TOP_BACKDROP_CLASS,
  LEFT_BACKDROP_CLASS,
  BOTTOM_BACKDROP_CLASS
 } from './constants';

import { getDrawerClass, getBackdropClass } from './utils';
const Wrapper = styled.div`
  .${RIGHT_DRAWER_CLASS} {
    right: 0;
    top: 0;
  }
  .${RIGHT_BACKDROP_CLASS} {
    left: 0;
    top: 0;
  }
  .${LEFT_DRAWER_CLASS} {
    left: 0;
    top: 0;
  }
  .${LEFT_BACKDROP_CLASS} {
    right: 0;
    top: 0;
  }
  .${TOP_DRAWER_CLASS} {
    width: 100%;
    height: ${p => p.isOpen ? "30%" : "0%"};
    top: 0;
    right: 0;
  }
  .${TOP_BACKDROP_CLASS}{
    width: 100%;
    height: ${p => p.isOpen ? "70%" : "0%"};
    bottom: 0;
    right: 0;
  }
  .${BOTTOM_DRAWER_CLASS} {
    width: 100%;
    height: ${p => p.isOpen ? "30%" : "0%"};
    bottom: 0;
    right: 0;
  }
  .${BOTTOM_BACKDROP_CLASS} {
    width: 100%;
    height: ${p => p.isOpen ? "70%" : "0%"};
    top: 0;
    right: 0;
  }
`;
const DrawerWrapper = styled.div`
  display: flex;
  background: white;
  width: ${p => p.isOpen ? "30%" : "0%"};
  height: 100%;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: width 2s ease; 
  overflow: hidden;
`;
const BackDrop = styled.div`
  opacity: 0.2;
  width: 70%;
  display: ${p => p.isOpen ? "block" : "none"};
  height: 100%;
  position: fixed;
  background-color: black;
`;


export const BaseDrawer = (props) => {
  const drawerClass = getDrawerClass(props);
  const backDropClass = getBackdropClass(props);
  return (
    <Wrapper {...props}>
      <BackDrop onClick={props.onClose} className={backDropClass} {...props} />
      <DrawerWrapper className={drawerClass} {...props}>{props.children}</DrawerWrapper>
    </Wrapper>
  );
};
