import Link from 'next/link';

import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react';

import { Text } from '../Typography';

import {
  FooterContainer,
  FooterContent,
  FooterDetailsInformations,
  FooterInformations,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterInformations>
          <Text size="sm" color="white-25">
            ©2024 Liga Escolar
          </Text>
          <Text size="sm" color="white-25">
            Todos os direitos reservados.
          </Text>
          <Text size="sm" color="white-25">
            Desenvolvido por{' '}
            <Link href="#" target="_blank">
              Argila Tecnologia
            </Link>
          </Text>
        </FooterInformations>

        <FooterDetailsInformations>
          <Link
            href="http://www.instagram.com/ligaescolarcaruaru?igsh=MmFrMGpnZngya2Zm"
            target="_blank"
          >
            <InstagramLogo size={24} />
          </Link>
          <Link href="" target="_blank">
            <FacebookLogo size={24} />
          </Link>
          <Link href="" target="_blank">
            <YoutubeLogo size={24} />
          </Link>
        </FooterDetailsInformations>
      </FooterContent>
    </FooterContainer>
  );
};

export { Footer };
