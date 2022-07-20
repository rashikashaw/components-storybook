import styled from '@emotion/styled';
import { SideMenu } from './components/SideMenu/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import { modules } from './stories';
import { ModuelBridge } from './components/ModuleBridge';
import { Header } from './components/Header/Header';

const Wrapper = styled.div`
  display: flex;
`;
const Text = styled.div`
  margin-left: 32px;
  font-size: 36px;
`;

const App = () => {
  return (
    <BrowserRouter>
    <Wrapper>
      <Header>
        <Text>Component library</Text>
      </Header>
      <SideMenu data={modules} />
      <ModuelBridge />
    </Wrapper>
    </BrowserRouter>
  );
}
export default App