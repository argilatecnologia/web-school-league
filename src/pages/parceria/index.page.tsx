import { Header } from '@/components/Header';

import Head from 'next/head';

import { Heading } from '@/components/Typography';

import {
  PartnershipContainer,
  PartnershipContent,
  PartnershipContentTitle,
} from './styles';

export default function Partnership() {
  return (
    <PartnershipContainer>
      <Head>
        <title>Parceria | Liga Escolar</title>
      </Head>

      <Header />

      <PartnershipContent>
        <PartnershipContentTitle>
          <Heading size="lg" color="gray-700">
            Listar os jogos aqui
          </Heading>
        </PartnershipContentTitle>

        {/* <HomeContainerImage>
            <HomeContentImage src={backgroundHomeImg} alt="" />
          </HomeContainerImage> */}
      </PartnershipContent>
    </PartnershipContainer>
  );
}
