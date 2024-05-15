import { Header } from '@/components/Header';

import Head from 'next/head';

import { Heading } from '@/components/Typography';

import { GameContainer, GameContent, GameContentTitle } from './styles';

export default function Game() {
  return (
    <>
      <GameContainer>
        <Head>
          <title>Jogos | Liga Escolar</title>
        </Head>

        <Header />

        <GameContent>
          <GameContentTitle>
            <Heading size="lg" color="gray-700">
              Listar os jogos aqui
            </Heading>
          </GameContentTitle>

          {/* <HomeContainerImage>
            <HomeContentImage src={backgroundHomeImg} alt="" />
          </HomeContainerImage> */}
        </GameContent>
      </GameContainer>
    </>
  );
}
