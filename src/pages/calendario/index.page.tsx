import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import {
  CalendarContainer,
  CalendarContent,
  CalendarContentTitle,
  CalendarContainerInformations,
  CalendarContentInformations,
  CalendarMonthTitle,
  CalendarDetailsInformations,
  CalendarDetails,
  CalendarDivider,
} from './styles';

export default function Calendar() {
  return (
    <>
      <NextSeo
        title="Calendário | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <CalendarContainer>
        <Head>
          <title>Calendário | Liga Escolar</title>
        </Head>

        <Header />

        <CalendarContent>
          <CalendarContentTitle>
            <Heading size="3xl" color="gray-700">
              AGENDA DE PRÓXIMOS JOGOS
            </Heading>

            <Text size="md" color="gray-700">
              Fique por dentro dos próximos jogos da Liga Escolar
            </Text>
          </CalendarContentTitle>

          <CalendarContainerInformations>
            <CalendarContentInformations>
              <CalendarMonthTitle>
                <Heading size="lg" color="gray-700">
                  Junho de 2024
                </Heading>
              </CalendarMonthTitle>

              <CalendarDetailsInformations>
                <CalendarDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <CalendarDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </CalendarDetails>
                <CalendarDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <CalendarDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </CalendarDetails>

                <CalendarDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <CalendarDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </CalendarDetails>
              </CalendarDetailsInformations>
            </CalendarContentInformations>

            <CalendarContentInformations>
              <CalendarMonthTitle>
                <Heading size="lg" color="gray-700">
                  Julho de 2024
                </Heading>
              </CalendarMonthTitle>

              <CalendarDetailsInformations>
                <CalendarDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <CalendarDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </CalendarDetails>
                <CalendarDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <CalendarDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </CalendarDetails>
              </CalendarDetailsInformations>
            </CalendarContentInformations>

            <CalendarContentInformations>
              <CalendarMonthTitle>
                <Heading size="lg" color="gray-700">
                  Agosto de 2024
                </Heading>
              </CalendarMonthTitle>

              <CalendarDetailsInformations>
                <CalendarDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <CalendarDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </CalendarDetails>
                <CalendarDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <CalendarDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </CalendarDetails>
              </CalendarDetailsInformations>
            </CalendarContentInformations>
          </CalendarContainerInformations>
        </CalendarContent>

        <Footer />
      </CalendarContainer>
    </>
  );
}
