import Link from 'next/link';
import { List } from 'phosphor-react';

import { Menubar } from '../Menubar';
import { MenubarMobile } from '../MenubarMobile';

import logoSchoolLeagueImg from '../../assets/logo-liga-escolar.jpg';

import { HeaderContainer, HeaderContent, HeaderContentImage } from './styles';

interface IHeaderProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (visible: boolean) => void;
}

const Header = ({ menuIsVisible = false, setMenuIsVisible }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <HeaderContentImage src={logoSchoolLeagueImg} alt="" />
        </Link>

        <Menubar />

        <MenubarMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <List
          size={40}
          onClick={() => {
            setMenuIsVisible(true);
          }}
        />
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
