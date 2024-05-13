import { HeaderContainer, HeaderContent, HeaderContentImage } from './styles';

import logoSchoolLeagueImg from '../../assets/logo-liga-escolar.jpg';
import { Menubar } from '../Menubar';
import Link from 'next/link';

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
