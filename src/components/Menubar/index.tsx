import { X } from 'phosphor-react';
import { Navigation } from './Navigation';

import { MenubarContainer, MenubarContainerMobile } from './styles';
import { useEffect } from 'react';

interface IMenubarProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (visible: boolean) => void;
}

const Menubar = ({ menuIsVisible, setMenuIsVisible }: IMenubarProps) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    // <MenubarContainer>
    //   <Navigation />
    // </MenubarContainer>
    <MenubarContainerMobile isVisible={menuIsVisible}>
      <X
        size={40}
        onClick={() => {
          setMenuIsVisible(false);
        }}
      />
      <Navigation />
    </MenubarContainerMobile>
  );
};

export { Menubar };
