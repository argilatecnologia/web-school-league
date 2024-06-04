import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

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
  PartnersContentDetails,
  PartnershipImage,
} from './styles';

export default function Partnership() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Parceria | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <PartnershipContainer>
        <Head>
          <title>Parceria | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

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
              <PartnersContentDetails>
                <PartnershipImage src={fakeLogoImg} alt="" />
                <Text size="md" color="gray-700">
                  TV Asa Branca
                </Text>
              </PartnersContentDetails>
              <PartnersContentDetails>
                <PartnershipImage src={fakeLogoImg} alt="" />
                <Text size="md" color="gray-700">
                  TV Asa Branca
                </Text>
              </PartnersContentDetails>
              <PartnersContentDetails>
                <PartnershipImage src={fakeLogoImg} alt="" />
                <Text size="md" color="gray-700">
                  TV Asa Branca
                </Text>
              </PartnersContentDetails>
              <PartnersContentDetails>
                <PartnershipImage src={fakeLogoImg} alt="" />
                <Text size="md" color="gray-700">
                  TV Asa Branca
                </Text>
              </PartnersContentDetails>
              <PartnersContentDetails>
                <PartnershipImage src={fakeLogoImg} alt="" />
                <Text size="md" color="gray-700">
                  TV Asa Branca
                </Text>
              </PartnersContentDetails>
              <PartnersContentDetails>
                <PartnershipImage src={fakeLogoImg} alt="" />
                <Text size="md" color="gray-700">
                  TV Asa Branca
                </Text>
              </PartnersContentDetails>
            </PartnersContentDetailsInformations>
          </PartnershipInformations>
        </PartnershipContent>
      </PartnershipContainer>

      <Footer />
    </>
  );
}
