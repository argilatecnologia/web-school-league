import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import backgroundHomeImg from '../../assets/background-home.png';
import logoParternHomeImg01 from '../../assets/logo-binance.svg';
import logoParternHomeImg02 from '../../assets/logo-crolla.svg';
import logoParternHomeImg03 from '../../assets/logo-tesla.svg';

import logoSchoolLeagueImg from '../../assets/logo-liga-escolar.jpg';

import {
  HomeContainer,
  HomeContent,
  HomeContentCenter,
  HomeContentTitle,
  HomeContainerImage,
  HomeContentImage,
  HomeRules,
  HomeRulesTitle,
  HomeRulesDetails,
  HomeRulesImage,
  HomePartners,
  HomePartnersTitle,
  HomePartnersDetails,
  HomePartnersImage,
} from './styles';
import Link from 'next/link';

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Esportes olímpicos e paralímpicos | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <HomeContainer>
        <Head>
          <title>Início | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

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

          <HomeRules>
            <HomeRulesTitle>
              <Heading size="3xl" color="gray-700">
                Baixe aqui o regulamento geral e as normas da{' '}
                <span style={{ color: '#E96924' }}>
                  Liga Escolar {new Date().getFullYear()}!
                </span>
              </Heading>
            </HomeRulesTitle>

            <HomeRulesDetails>
              <Link href="/rules" target="_blank">
                <HomeRulesImage src={logoSchoolLeagueImg} alt="" />
                <Heading size="3xl">
                  <span style={{ color: '#E96924' }}>
                    Regulamento Geral e Normas
                  </span>
                </Heading>
              </Link>
            </HomeRulesDetails>
          </HomeRules>

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
              <HomePartnersImage src={logoParternHomeImg02} alt="" />
              <HomePartnersImage src={logoParternHomeImg03} alt="" />
            </HomePartnersDetails>
          </HomePartners>
        </HomeContent>

        <Footer />
      </HomeContainer>
    </>
  );
}
