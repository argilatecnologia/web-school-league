import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  PreviousEditionsContainer,
  PreviousEditionsContent,
  PreviousEditionsContentTitle,
  PreviousEditionsInformations,
  PreviousEditionsDetailsInformations,
  PreviousEditionsDetails,
  PreviousEditionsImage,
} from './styles';

export default function PreviousEditions() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Edições Anteriores | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <PreviousEditionsContainer>
        <Head>
          <title>Edições Anteriores | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <PreviousEditionsContent>
          <PreviousEditionsContentTitle>
            <Heading size="3xl" color="gray-700">
              FIQUE POR DENTRO DAS EDIÇÕES ANTERIORES
            </Heading>

            <Text size="md" color="gray-700">
              Veja os jogos e eventos que aconteceram da Liga Escolar
            </Text>
          </PreviousEditionsContentTitle>

          <PreviousEditionsInformations>
            <PreviousEditionsDetailsInformations>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
            </PreviousEditionsDetailsInformations>
          </PreviousEditionsInformations>
        </PreviousEditionsContent>

        <Footer />
      </PreviousEditionsContainer>
    </>
  );
}
