import { useEffect } from 'react';
import { X } from 'phosphor-react';

import { Navigation } from './Navigation';

import { MenubarContainerMobile } from './styles';

interface IMenubarMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (visible: boolean) => void;
}

const MenubarMobile = ({
  menuIsVisible,
  setMenuIsVisible,
}: IMenubarMobileProps) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    document.body.style.overflowX = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
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

export { MenubarMobile };
