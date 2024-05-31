import { X } from 'phosphor-react';
import { Navigation } from './Navigation';

import { MenubarContainer } from './styles';

interface IMenubarProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (visible: boolean) => void;
}

const Menubar = ({ menuIsVisible, setMenuIsVisible }: IMenubarProps) => {
  return (
    <MenubarContainer isVisible={menuIsVisible}>
      <X
        size={30}
        onClick={() => {
          setMenuIsVisible(false);
        }}
      />
      <Navigation />
    </MenubarContainer>
  );
};

export { Menubar };
