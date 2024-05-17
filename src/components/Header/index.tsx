import Link from 'next/link';

import { Menubar } from '../Menubar';

import logoSchoolLeagueImg from '../../assets/logo-liga-escolar.jpg';

import { HeaderContainer, HeaderContent, HeaderContentImage } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <HeaderContentImage src={logoSchoolLeagueImg} alt="" />
        </Link>

        <Menubar />
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
