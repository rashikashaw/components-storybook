import styled from "@emotion/styled";

const Tag = styled.div`
  height: 32px;
  width: 80px;
  font-weight: 500;
  box-shadow: 2px 2px light-grey;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.color};
  border: 1px;
  border-radius: 5px;
  margin-bottom: 8px;
`;
const statusTheme = {
  ok: 'lightgreen',
  warning: 'orange',
  error: 'red',
  info: 'lightyellow',
  unknown: 'lightgrey',
}

export const StatusTag = (props) => {
  const color = props.type in statusTheme ? statusTheme[props.type] : statusTheme.unknown;
  return (
    <Tag color={color}>{props.text}</Tag>
  );
};
