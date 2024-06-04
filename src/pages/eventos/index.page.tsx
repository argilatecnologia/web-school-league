import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  EventsContainer,
  EventsContent,
  EventsContentTitle,
  EventsInformations,
  EventsDetailsInformations,
  EventsDetails,
  EventsImage,
} from './styles';

export default function Events() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Eventos | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <EventsContainer>
        <Head>
          <title>Eventos | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <EventsContent>
          <EventsContentTitle>
            <Heading size="3xl" color="gray-700">
              JOGOS E EVENTOS PARA NÃO PERDER
            </Heading>

            <Text size="md" color="gray-700">
              Acompanhe os jogos e eventos mais importantes da Liga Escolar
            </Text>
          </EventsContentTitle>

          <EventsInformations>
            <EventsDetailsInformations>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
              <EventsDetails>
                <EventsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>

                <Text size="md" color="gray-700">
                  Data - Hora
                </Text>
              </EventsDetails>
            </EventsDetailsInformations>
          </EventsInformations>
        </EventsContent>

        <Footer />
      </EventsContainer>
    </>
  );
}
