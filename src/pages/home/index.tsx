import { Header } from '@/components/Header';

import backgroundHomeImg from '../../assets/backgroung-home-img.png';

import Head from 'next/head';

import { Heading, Text } from '@/components/Typography';
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
            <Heading size="lg" color="gray-700">
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
      </HomeContainer>
    </>
  );
}
