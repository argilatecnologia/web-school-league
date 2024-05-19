import Head from 'next/head';

import { Heading } from '@/components/Typography';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  PartnershipContainer,
  PartnershipContent,
  PartnershipContentTitle,
  PartnershipDivContainer,
  PartnershipGridContent,
  PartnersContentDetails,
  PartnersLogoContentImage,
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

          <PartnershipDivContainer>
            <PartnershipGridContent>
              <PartnersContentDetails>
                <PartnersLogoContentImage src={fakeLogoImg} alt="" />
              </PartnersContentDetails>
              <PartnersContentDetails>
                <PartnersLogoContentImage src={fakeLogoImg} alt="" />
              </PartnersContentDetails>
            </PartnershipGridContent>
          </PartnershipDivContainer>
        </PartnershipContent>
      </PartnershipContainer>

      <Footer />
    </>
  );
}
