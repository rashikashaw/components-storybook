import { useState } from "react"
import { BaseDrawer } from './BaseDrawer';

export const useDrawer = (initiallyOpen = false) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const Drawer = (props) => (
    <BaseDrawer
      isOpen={isOpen}
      onClose={close}
      {...props}
    />
  );
  return { Drawer, isOpen, open, close };
}


