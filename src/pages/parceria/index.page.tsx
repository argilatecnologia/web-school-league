import { Header } from '@/components/Header';

import Head from 'next/head';

import { Heading } from '@/components/Typography';

import {
  PartnershipContainer,
  PartnershipContent,
  PartnershipContentTitle,
} from './styles';
import { Footer } from '@/components/Footer';

export default function Partnership() {
  return (
    <>
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
        </PartnershipContent>
      </PartnershipContainer>

      <Footer />
    </>
  );
}
