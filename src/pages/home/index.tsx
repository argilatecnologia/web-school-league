import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import backgroundHomeImg from '../../assets/background-home.png';
import logoParternHomeImg01 from '../../assets/logo-binance.svg';
import logoParternHomeImg02 from '../../assets/logo-crolla.svg';
import logoParternHomeImg03 from '../../assets/logo-tesla.svg';

import {
  HomeContainer,
  HomeContent,
  HomeContentCenter,
  HomeContentTitle,
  HomeContainerImage,
  HomeContentImage,
  HomePartners,
  HomePartnersTitle,
  HomePartnersDetails,
  HomePartnersImage,
} from './styles';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Head>
          <title>Início | Liga Escolar</title>
        </Head>

        <Header />

        <HomeContent>
          <HomeContentCenter>
            <HomeContentTitle>
              <Heading size="3xl" color="gray-700">
                Conteúdo esportivo dos jogos escolares.{<br />} Fique por
                dentro!
              </Heading>
              <Text size="md" color="gray-700">
                Um site repleto de notícias esportivas para você.
              </Text>
            </HomeContentTitle>

            <HomeContainerImage>
              <HomeContentImage src={backgroundHomeImg} alt="" />
            </HomeContainerImage>
          </HomeContentCenter>

          <HomePartners>
            <HomePartnersTitle>
              <Heading size="3xl" color="gray-700">
                Trabalhamos com os Melhores Parceiros
              </Heading>
            </HomePartnersTitle>

            <HomePartnersDetails>
              <HomePartnersImage src={logoParternHomeImg01} alt="" />
              <HomePartnersImage src={logoParternHomeImg02} alt="" />
              <HomePartnersImage src={logoParternHomeImg03} alt="" />
              <HomePartnersImage src={logoParternHomeImg01} alt="" />
            </HomePartnersDetails>
          </HomePartners>
        </HomeContent>

        <Footer />
      </HomeContainer>
    </>
  );
}
