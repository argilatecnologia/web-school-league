import { Header } from '@/components/Header';
import Head from 'next/head';

import {
  AboutContainer,
  AboutContent,
  AboutContentImage,
  AboutTextContent,
  AboutTitle,
  AboutTitleContainer,
} from './styles';

import backgroundImg from '../../assets/background-img.png';
import { Heading } from '@/components/Typography';

export default function About() {
  return (
    <AboutContainer>
      <Head>
        <title>Sobre | Liga Escolar</title>
      </Head>

      <Header />

      <AboutContent>
        <AboutContentImage src={backgroundImg} alt="" />

        <AboutTitleContainer>
          <Heading size="lg" color="gray-700">
            Sobre nós
          </Heading>

          <AboutTextContent></AboutTextContent>
        </AboutTitleContainer>
      </AboutContent>
    </AboutContainer>
  );
}
