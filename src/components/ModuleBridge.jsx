import { modules } from "../stories";
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  left: 20%;
  top: 64px;
  display: flex;
  height: 100%;
  width: 80%;
  justify-content: center;
  padding:10px;
`;
export const ModuelBridge = () => (
  <Container>
    <Routes >
      {
        modules.map((module, i) => <Route path={module.path} key={`${module.label}-${i}`} element={module.overview}/>)
      }
      <Route path='/' element={<Navigate to={modules[0].path} />} />
    </Routes>
  </Container>
);
