import LoremIpsum from "react-lorem-ipsum";
import { Tabs } from "../../packages/Tabs";

const Body1 = () => (
  <LoremIpsum p={2} />
);
const Body2 = () => (
  <>
    <p>👽 👾 🤖 😺 😸 😹 😻 😼 😽 🙀</p>
    <LoremIpsum p={1} />
  </>
);
const tabData = [
  {
    label: 'Tab1',
    body: <Body1 />,
  },
  {
    label: 'Tab2',
    body: <Body2 />
  },
];

const Overview = () => {
  return(
    <Tabs
      data={tabData}
    />
  )
};
export default Overview;