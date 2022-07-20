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
 
export const getDrawerClass = props => {
  if (props.top) return TOP_DRAWER_CLASS;
  if (props.bottom) return BOTTOM_DRAWER_CLASS;
  if (props.right) return RIGHT_DRAWER_CLASS;
  if (props.left) return LEFT_DRAWER_CLASS;
};

export const getBackdropClass = props => {
  if (props.top) return TOP_BACKDROP_CLASS;
  if (props.bottom) return BOTTOM_BACKDROP_CLASS;
  if (props.right) return RIGHT_BACKDROP_CLASS;
  if (props.left) return LEFT_BACKDROP_CLASS;
};
