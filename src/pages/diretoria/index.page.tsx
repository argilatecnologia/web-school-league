import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api';

import { Heading, Text } from '@/components/Typography';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LoadingSpinner } from '@/components/LoadingSpinner';

import {
  DirectorshipContainer,
  DirectorshipContent,
  DirectorshipContentTitle,
  DirectorshipInformations,
  DirectorshipDetailsInformations,
  DirectorshipDetails,
  DirectorshipImage,
} from './styles';

interface IDirector {
  name: string;
  nameFormatted: string;
  image_url: string;
}

export default function Directorship() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  // FUNCTION USE QUERY
  const { data: detailDirectorsData, isLoading: isLoadingDirectors } = useQuery<
    IDirector[]
  >({
    queryKey: ['detailDirectorsData'],
    queryFn: async () => {
      try {
        const response = await api.get('/directors', {
          params: {
            enabled: 'all',
          },
        });

        if (response.status === 200) {
          const directorsData = response.data.directors as IDirector[];

          const directors = directorsData.map((director) => {
            const nameFormatted =
              director.name.length >= 25
                ? director.name.substring(0, 15).concat(' ...')
                : director.name;

            return {
              ...director,
              nameFormatted,
            };
          });

          return directors;
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            console.log('Nenhum diretor encontrado.');
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
        title="Diretoria | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <DirectorshipContainer>
        <Head>
          <title>Diretoria | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <DirectorshipContent>
          <DirectorshipContentTitle>
            <Heading size="3xl" color="gray-700">
              NOSSOS DIRETORES
            </Heading>
          </DirectorshipContentTitle>

          {isLoadingDirectors === true ? (
            <LoadingSpinner />
          ) : (
            <DirectorshipInformations>
              <DirectorshipDetailsInformations>
                {detailDirectorsData?.map((director) => (
                  <>
                    <DirectorshipDetails>
                      <DirectorshipImage
                        src={director.image_url ? director.image_url : ''}
                        alt=""
                        width={120}
                        height={120}
                      />
                      <Text size="md" color="gray-700">
                        {director.nameFormatted}
                      </Text>
                    </DirectorshipDetails>
                  </>
                ))}
              </DirectorshipDetailsInformations>
            </DirectorshipInformations>
          )}
        </DirectorshipContent>

        <Footer />
      </DirectorshipContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
