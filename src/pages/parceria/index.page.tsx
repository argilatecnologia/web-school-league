import Head from 'next/head';

import { Heading } from '@/components/Typography';

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
              Nossos parceiros
            </Heading>
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
            </PartnersContentDetailsInformations>
            <PartnersContentDetailsInformations>
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
