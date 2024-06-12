import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Link from 'next/link';

import { DownloadSimple } from 'phosphor-react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading, Text } from '@/components/Typography';

import {
  RuleContainer,
  RuleContent,
  RuleContentTitle,
  RuleContainerInformations,
  RuleContentInformations,
  RuleMonthTitle,
  RuleDetailsInformations,
  RuleDetails,
} from './styles';

export default function Rule() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Regulamento Geral e Normas | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <RuleContainer>
        <Head>
          <title>Regulamento Geral e Normas | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <RuleContent>
          <RuleContentTitle>
            <Heading size="3xl" color="gray-700">
              REGULAMENTO GERAL E NORMAS
            </Heading>

            <Text size="md" color="gray-700">
              Baixe o regulamento geral e as normas da Liga Escolar{' '}
              {new Date().getFullYear()} e fique por dentro!
            </Text>
          </RuleContentTitle>

          <RuleContainerInformations>
            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Regulamento Geral
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link href="#">
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Regulamento Geral
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleMonthTitle>
              <Heading size="lg" color="gray-700">
                MODALIDADES COLETIVAS
              </Heading>
            </RuleMonthTitle>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Futsal
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link href="#">
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Título do evento
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Basquete
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleMonthTitle>
              <Heading size="lg" color="gray-700">
                MODALIDADES INDIVIDUAIS
              </Heading>
            </RuleMonthTitle>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Natação
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>
          </RuleContainerInformations>
        </RuleContent>

        <Footer />
      </RuleContainer>
    </>
  );
}
