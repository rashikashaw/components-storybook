import ExpandableBlockOverview from "./ExpandableBlock/Overview";
import DrawerOverview from "./Drawer/Overview"
import TabsOverview from "./Tabs/Overview";
import StatusTagsOverview from "./StatusTag/Overview";

export const modules = [
  {
    label:'Expandable Block',
    path: '/expandable-block',
    overview: <ExpandableBlockOverview />,
  },
  {
    label:'Drawer',
    path: '/drawer',
    overview: <DrawerOverview />,
  },
  {
    label:'Tabs',
    path: '/tabs',
    overview: <TabsOverview />,
  },
  {
    label:'Status Tags',
    path: '/status-tags',
    overview: <StatusTagsOverview />,
  },
];
