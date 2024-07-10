import { GetServerSideProps } from 'next';
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
  PreviousEditionsContainer,
  PreviousEditionsContent,
  PreviousEditionsContentTitle,
  PreviousEditionsInformations,
  PreviousEditionsDetailsInformations,
  PreviousEditionsDetails,
  PreviousEditionsImage,
} from './styles';

interface IPreviousEdition {
  title: string;
  titleFormatted: string;
  description: string;
  image_url: string;
}

export default function PreviousEditions() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  // FUNCTION USE QUERY
  const {
    data: detailPreviousEditionsData,
    isLoading: isLoadingPreviousEditions,
  } = useQuery<IPreviousEdition[]>({
    queryKey: ['detailPreviousEditionsData'],
    queryFn: async () => {
      try {
        const response = await api.get('/previousEditions', {
          params: {
            enabled: 'all',
          },
        });

        if (response.status === 200) {
          const previousEditionsData = response.data
            .previousEditions as IPreviousEdition[];

          const previousEditions = previousEditionsData.map(
            (previousEdition) => {
              const titleFormatted =
                previousEdition.title.length >= 25
                  ? previousEdition.title.substring(0, 15).concat(' ...')
                  : previousEdition.title;

              return {
                ...previousEdition,
                titleFormatted,
              };
            },
          );

          return previousEditions;
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            console.log('Nenhuma edição anterior encontrada.');
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

          {isLoadingPreviousEditions === true ? (
            <LoadingSpinner />
          ) : (
            <PreviousEditionsInformations>
              <PreviousEditionsDetailsInformations>
                {detailPreviousEditionsData?.map((edition) => (
                  <>
                    <PreviousEditionsDetails>
                      <PreviousEditionsImage
                        src={edition.image_url ? edition.image_url : ''}
                        alt=""
                        width={120}
                        height={120}
                      />
                      <Heading size="md" color="gray-700">
                        {edition.titleFormatted ? edition.titleFormatted : ''}
                      </Heading>
                    </PreviousEditionsDetails>
                  </>
                ))}
              </PreviousEditionsDetailsInformations>
            </PreviousEditionsInformations>
          )}
        </PreviousEditionsContent>

        <Footer />
      </PreviousEditionsContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
