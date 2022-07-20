import styled from "@emotion/styled";

const StyledButton = styled.button`
  height: 70%;
  width: 10%;
  cursor: pointer;
  background-color: ${p => p.selected ? '#98DBF3' : '#FFFFFF'}
`;
export const Tab = ({ label, onTabClick, selected }) => {
  return(
    <StyledButton onClick={onTabClick} selected={selected}>{label}</StyledButton>
  );
};
