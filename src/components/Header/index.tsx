import { HeaderContainer, HeaderContent, HeaderContentImage } from './styles';

import logoSchoolLeagueImg from '../../assets/logo-liga-escolar.jpg';
import { Menubar } from '../Menubar';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderContentImage src={logoSchoolLeagueImg} alt="" />

        <Menubar />
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
