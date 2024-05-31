import Link from 'next/link';

import { Menubar } from '../Menubar';

import logoSchoolLeagueImg from '../../assets/logo-liga-escolar.jpg';

import { HeaderContainer, HeaderContent, HeaderContentImage } from './styles';
import { useState } from 'react';

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <HeaderContentImage src={logoSchoolLeagueImg} alt="" />
        </Link>

        <Menubar
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
