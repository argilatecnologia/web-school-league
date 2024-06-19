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
  PartnershipContainer,
  PartnershipContent,
  PartnershipContentTitle,
  PartnershipInformations,
  PartnersContentDetailsInformations,
  PartnersContentDetails,
  PartnershipImage,
} from './styles';

interface IPartner {
  id: string;
  name: string;
  nameFormatted: string;
  image_url: string;
}

export default function Partnership() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  // FUNCTION USE QUERY
  const { data: detailPartnersData, isLoading: isLoadingPartners } = useQuery<
    IPartner[]
  >({
    queryKey: ['detailPartnersPage'],
    queryFn: async () => {
      try {
        const response = await api.get('/partners', {
          params: {
            enabled: 'all',
          },
        });

        if (response.status === 200) {
          const partnersData = response.data.partners as IPartner[];

          const partners = partnersData.map((partner) => {
            const nameFormatted =
              partner.name.length >= 25
                ? partner.name.substring(0, 15).concat(' ...')
                : partner.name;

            return {
              ...partner,
              nameFormatted,
            };
          });

          return partners;
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response) {
            console.log('Nenhuma empresa parceira encontrada.');
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

          {isLoadingPartners === true ? (
            <LoadingSpinner />
          ) : (
            <PartnershipInformations>
              <PartnersContentDetailsInformations>
                {detailPartnersData?.map((partner) => (
                  <>
                    <PartnersContentDetails>
                      <PartnershipImage
                        src={partner.image_url ? partner.image_url : ''}
                        alt=""
                        width={120}
                        height={120}
                      />
                      <Text size="md" color="gray-700">
                        {partner.nameFormatted}
                      </Text>
                    </PartnersContentDetails>
                  </>
                ))}
              </PartnersContentDetailsInformations>
            </PartnershipInformations>
          )}
        </PartnershipContent>
      </PartnershipContainer>

      <Footer />
    </>
  );
}
