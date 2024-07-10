import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import dayjs from 'dayjs';

import { api } from '@/lib/api';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';
import { LoadingSpinner } from '@/components/LoadingSpinner';

import {
  EventsContainer,
  EventsContent,
  EventsContentTitle,
  EventsInformations,
  EventsDetailsInformations,
  EventsDetails,
  EventsImage,
} from './styles';

interface IEvent {
  id: string;
  name: string;
  nameFormatted: string;
  registration_deadline: string;
  registration_deadline_formatted: string;
  hour: string;
  image_url: string;
}

export default function Events() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  // FUNCTION USE QUERY
  const { data: detailEventsData, isLoading: isLoadingEvents } = useQuery<
    IEvent[]
  >({
    queryKey: ['detailEventsPage'],
    queryFn: async () => {
      try {
        const response = await api.get('/events', {
          params: {
            enabled: 'all',
          },
        });

        if (response.status === 200) {
          const eventsData = response.data.events as IEvent[];

          const events = eventsData.map((event) => {
            const nameFormatted =
              event.name.length >= 25
                ? event.name.substring(0, 15).concat(' ...')
                : event.name;

            const eventDateSplit = event.registration_deadline.split('T');
            const eventDate = eventDateSplit[0];

            return {
              ...event,
              nameFormatted,
              registration_deadline_formatted:
                dayjs(eventDate).format('DD/MM/YYYY'),
            };
          });

          return events;
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            console.log('Nenhum evento encontrado.');
          }
        }
      }

      return [];
    },
    refetchOnWindowFocus: false,
  });
  // END FUNCTION USE QUERY

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

          {isLoadingEvents === true ? (
            <LoadingSpinner />
          ) : (
            <EventsInformations>
              <EventsDetailsInformations>
                {detailEventsData?.map((event) => (
                  <>
                    <EventsDetails>
                      <EventsImage
                        src={event.image_url ? event.image_url : ''}
                        alt=""
                        width={120}
                        height={120}
                      />
                      <Heading size="md" color="gray-700">
                        {event.nameFormatted ? event.nameFormatted : ''}
                      </Heading>

                      <Text size="md" color="gray-700">
                        {event.registration_deadline_formatted
                          ? event.registration_deadline_formatted
                          : ''}{' '}
                        - {event.hour ? event.hour : ''}
                      </Text>
                    </EventsDetails>
                  </>
                ))}
              </EventsDetailsInformations>
            </EventsInformations>
          )}
        </EventsContent>

        <Footer />
      </EventsContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
