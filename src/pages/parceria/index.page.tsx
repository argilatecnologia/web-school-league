import Head from 'next/head';

import { Heading, Text } from '@/components/Typography';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  PartnershipContainer,
  PartnershipContent,
  PartnershipContentTitle,
  PartnershipInformations,
  PartnersContentDetailsInformations,
  PartnershipImage,
} from './styles';

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
            <Heading size="3xl" color="gray-700">
              NOSSOS PARCEIROS
            </Heading>

            <Text size="md" color="gray-700">
              Veja quem apoia os mais diversos esportes da Liga Escolar
            </Text>
          </PartnershipContentTitle>

          <PartnershipInformations>
            <PartnersContentDetailsInformations>
              <PartnershipImage src={fakeLogoImg} alt="" />
              <PartnershipImage src={fakeLogoImg} alt="" />
              <PartnershipImage src={fakeLogoImg} alt="" />
              <PartnershipImage src={fakeLogoImg} alt="" />
              <PartnershipImage src={fakeLogoImg} alt="" />
              <PartnershipImage src={fakeLogoImg} alt="" />
              <PartnershipImage src={fakeLogoImg} alt="" />
              <PartnershipImage src={fakeLogoImg} alt="" />
            </PartnersContentDetailsInformations>
          </PartnershipInformations>
        </PartnershipContent>
      </PartnershipContainer>

      <Footer />
    </>
  );
}
