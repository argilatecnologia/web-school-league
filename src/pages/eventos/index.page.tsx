import Head from 'next/head';

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
  return (
    <>
      <EventsContainer>
        <Head>
          <title>Eventos | Liga Escolar</title>
        </Head>

        <Header />

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
