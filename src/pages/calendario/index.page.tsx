import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';
import { LoadingSpinner } from '@/components/LoadingSpinner';

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
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';

interface IEventCalendar {
  title: string;
  titleFormatted: string;
  month: string;
  event_date: string;
  event_date_formatted: string;
  event_month_formatted: string;
  event_current_year_formatted: string;
  hour: string;
}

export default function Calendar() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  // FUNCTION USE QUERY
  const { data: detailEventCalendarsData, isLoading: isLoadingEventCalendars } =
    useQuery<IEventCalendar[]>({
      queryKey: ['detailEventCalendarsPage'],
      queryFn: async () => {
        try {
          const response = await api.get('/eventCalendars', {
            params: {
              enabled: 'all',
            },
          });

          if (response.status === 200) {
            const eventCalendarsData = response.data
              .eventCalendars as IEventCalendar[];

            const months = [];

            const eventMonths = eventCalendarsData.map((event) => {
              const eventDateSplit = event.event_date.split('T');
              const eventDateSplitInDayMonthYear = eventDateSplit[0].split('-');

              const eventCalendarMonth = eventDateSplitInDayMonthYear[1];

              console.log('Mês com algum evento', eventCalendarMonth);

              return eventCalendarMonth;
            });

            if (months.length === 0) {
              months.push(eventMonths[0]);
            }

            months.forEach((month) => {
              eventMonths.forEach((eventM) => {
                if (month !== eventM) {
                  months.push(eventM);
                }
              });
            });

            console.log(months);

            const events = eventCalendarsData.map((event) => {
              const titleFormatted =
                event.title.length >= 25
                  ? event.title.substring(0, 15).concat(' ...')
                  : event.title;

              const eventDateSplit = event.event_date.split('T');
              const eventDateSplitInDayMonthYear = eventDateSplit[0].split('-');
              const eventDate = eventDateSplit[0];

              // Mostra o dia do evento, por exemplo: 10/08/2024, vai mostrar 10.
              // const eventCalendarDate = eventDate[2];
              const eventCalendarMonth = eventDateSplitInDayMonthYear[1];
              const eventCurrentYear = eventDateSplitInDayMonthYear[0];

              // console.log(eventDateSplit);
              // console.log('Event date', eventDate);

              // console.log('Mes', eventCalendarMonth);
              // console.log('Ano', eventCurrentYear);

              return {
                ...event,
                titleFormatted,
                event_date_formatted: dayjs(eventDate).format('DD/MM/YYYY'),
                event_month_formatted: dayjs(eventCalendarMonth)
                  .locale(ptBR)
                  .format('MMMM')
                  .toUpperCase(),
                event_current_year_formatted:
                  dayjs(eventCurrentYear).format('YYYY'),
              };
            });

            const datas = [];

            months.forEach((mes) => {
              const datasEvento = events.filter((data) => {
                const eventDateSplit = data.event_date.split('T');
                const eventDateSplitInDayMonthYear =
                  eventDateSplit[0].split('-');

                const eventCalendarMonth = eventDateSplitInDayMonthYear[1];

                if (mes === eventCalendarMonth) {
                  return data;
                }

                return null;
              });

              const dia = {
                mes,
                evento: datasEvento,
              };

              datas.push(dia);
            });

            console.log('Datas', datas);

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
        title="Calendário | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <CalendarContainer>
        <Head>
          <title>Calendário | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <CalendarContent>
          <CalendarContentTitle>
            <Heading size="3xl" color="gray-700">
              AGENDA DE PRÓXIMOS JOGOS
            </Heading>

            <Text size="md" color="gray-700">
              Fique por dentro dos próximos jogos da Liga Escolar
            </Text>
          </CalendarContentTitle>

          {isLoadingEventCalendars === true ? (
            <LoadingSpinner />
          ) : (
            <CalendarContainerInformations>
              <CalendarContentInformations>
                {detailEventCalendarsData?.map((event) => (
                  <>
                    <CalendarMonthTitle>
                      <Heading size="lg" color="gray-700">
                        {event.event_month_formatted} de{' '}
                        {event.event_current_year_formatted}
                      </Heading>
                    </CalendarMonthTitle>

                    <CalendarDetailsInformations>
                      <CalendarDetails>
                        <Text size="md" color="gray-700">
                          {event.event_date_formatted} - {event.hour}
                        </Text>

                        <CalendarDivider />

                        <Heading size="md" color="gray-700">
                          {event.title}
                        </Heading>
                      </CalendarDetails>
                    </CalendarDetailsInformations>
                  </>
                ))}
              </CalendarContentInformations>
            </CalendarContainerInformations>
          )}
        </CalendarContent>

        <Footer />
      </CalendarContainer>
    </>
  );
}
