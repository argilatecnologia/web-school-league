'use client';

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
  AssociatedCollegesContainer,
  AssociatedCollegesContent,
  AssociatedCollegesTitle,
  AssociatedCollegesInformations,
  AssociatedCollegesImage,
  AssociatedCollegesDetailsInformations,
  AssociatedCollegesDetails,
} from './styles';

interface IAssociatedCollege {
  name: string;
  nameFormatted: string;
  image_url: string;
}

export default function AssociatedColleges() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  // FUNCTION USE QUERY
  const {
    data: detailAssociatedCollegesData,
    isLoading: isLoadingAssociatedColleges,
  } = useQuery<IAssociatedCollege[]>({
    queryKey: ['detailAssociatedCollegesData'],
    queryFn: async () => {
      try {
        const response = await api.get('/associatedColleges', {
          params: {
            enabled: 'all',
          },
        });

        if (response.status === 200) {
          const associatedCollegesData = response.data
            .associatedColleges as IAssociatedCollege[];

          const associatedColleges = associatedCollegesData.map((college) => {
            const nameFormatted =
              college.name.length >= 25
                ? college.name.substring(0, 15).concat(' ...')
                : college.name;

            return {
              ...college,
              nameFormatted,
            };
          });

          return associatedColleges;
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            console.log('Nenhum colégio encontrado.');
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
        title="Colégios Associados | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <AssociatedCollegesContainer>
        <Head>
          <title>Colégios Associados | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <AssociatedCollegesContent>
          <AssociatedCollegesTitle>
            <Heading size="3xl" color="gray-700">
              NOSSOS COLÉGIOS ASSOCIADOS
            </Heading>
          </AssociatedCollegesTitle>

          {isLoadingAssociatedColleges === true ? (
            <LoadingSpinner />
          ) : (
            <AssociatedCollegesInformations>
              <AssociatedCollegesDetailsInformations>
                {detailAssociatedCollegesData?.map((college) => (
                  <>
                    <AssociatedCollegesDetails>
                      <AssociatedCollegesImage
                        src={college.image_url ? college.image_url : ''}
                        alt=""
                        width={120}
                        height={120}
                      />
                      <Text size="md" color="gray-700">
                        {college?.nameFormatted}
                      </Text>
                    </AssociatedCollegesDetails>
                  </>
                ))}
              </AssociatedCollegesDetailsInformations>
            </AssociatedCollegesInformations>
          )}
        </AssociatedCollegesContent>

        <Footer />
      </AssociatedCollegesContainer>
    </>
  );
}
