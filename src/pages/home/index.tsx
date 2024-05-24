import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import backgroundHomeImg from '../../assets/background-home.png';

import {
  HomeContainer,
  HomeContent,
  HomeContentTitle,
  HomeContainerImage,
  HomeContentImage,
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
          <HomeContentTitle>
            <Heading size="3xl" color="gray-700">
              Conteúdo esportivo dos jogos escolares.{<br />} Fique por dentro!
            </Heading>
            <Text size="md" color="gray-700">
              Um site repleto de notícias esportivas para você.
            </Text>
          </HomeContentTitle>

          <HomeContainerImage>
            <HomeContentImage src={backgroundHomeImg} alt="" />
          </HomeContainerImage>
        </HomeContent>

        <Footer />
      </HomeContainer>
    </>
  );
}
