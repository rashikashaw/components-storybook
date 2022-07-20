import { StatusTag } from "../../packages/StatusTag/StatusTag"; 
import styled from "@emotion/styled";

// const StatusTheme = {
//   ok: green,
//   low: orange,
//   warning: red,
//   error: red,
//   info: yellow,
//   unknown: Bluetooth,
// }
const Wrapper = styled.div`
  height: 30%;
  width: 80%;
  display: block;
  justify-content: flex-start;
  align-items: center;
  border: grey solid 1px;
  background-color: #DEDAF9;
  padding: 20px;
  flex-direction: column;
  display: flex;
`;

const Overview = () => (
  <Wrapper>
    <StatusTag text="Ok" type='ok' />
    <StatusTag text="Error" type='error' />
    <StatusTag text="Info" type='info' />
    <StatusTag text="Warning" type='warning' />
    <StatusTag text="Unknown" type='unknown' />
  </Wrapper>
);
export default Overview;