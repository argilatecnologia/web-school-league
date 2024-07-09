import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Link from 'next/link';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';
import { LoadingSpinner } from '@/components/LoadingSpinner';

import backgroundHomeImg from '../../assets/background-home.png';
import logoSchoolLeagueImg from '../../assets/logo-liga-escolar.jpg';

import {
  HomeContainer,
  HomeContent,
  HomeContentCenter,
  HomeContentTitle,
  HomeContainerImage,
  HomeContentImage,
  HomeRules,
  HomeRulesTitle,
  HomeRulesDetails,
  HomeRulesImage,
  HomePartners,
  HomePartnersTitle,
  HomePartnersDetails,
  HomePartnersImage,
} from './styles';

interface IPartner {
  id: string;
  image_url: string;
}

export default function Home() {
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

          return partnersData;
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
        title="Esportes olímpicos e paralímpicos | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <HomeContainer>
        <Head>
          <title>Início | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <HomeContent>
          <HomeContentCenter>
            <HomeContentTitle>
              <Heading size="3xl" color="gray-700">
                Conteúdo esportivo dos jogos escolares.{<br />} Fique por
                dentro!
              </Heading>
              <Text size="md" color="gray-700">
                Um site repleto de notícias esportivas para você.
              </Text>
            </HomeContentTitle>

            <HomeContainerImage>
              <HomeContentImage src={backgroundHomeImg} alt="" />
            </HomeContainerImage>
          </HomeContentCenter>

          <HomeRules>
            <HomeRulesTitle>
              <Heading size="3xl" color="gray-700">
                Baixe aqui o regulamento geral e as normas da{' '}
                <span style={{ color: '#E96924' }}>
                  Liga Escolar {new Date().getFullYear()}!
                </span>
              </Heading>
            </HomeRulesTitle>

            <HomeRulesDetails>
              <Link href="/rules">
                <HomeRulesImage src={logoSchoolLeagueImg} alt="" />
                <Heading size="3xl" color="">
                  <span style={{ color: '#E96924' }}>
                    Regulamento Geral e Normas
                  </span>
                </Heading>
              </Link>
            </HomeRulesDetails>
          </HomeRules>

          <HomePartners>
            <HomePartnersTitle>
              <Heading size="3xl" color="gray-700">
                Trabalhamos com os Melhores Parceiros
              </Heading>
            </HomePartnersTitle>

            {isLoadingPartners === true ? (
              <LoadingSpinner />
            ) : (
              <HomePartnersDetails>
                {detailPartnersData?.slice(0, 5).map((partner) => (
                  <>
                    <HomePartnersImage
                      key={partner.id}
                      src={partner.image_url ? partner.image_url : ''}
                      alt=""
                      width={120}
                      height={120}
                    />
                  </>
                ))}
              </HomePartnersDetails>
            )}
          </HomePartners>
        </HomeContent>

        <Footer />
      </HomeContainer>
    </>
  );
}
