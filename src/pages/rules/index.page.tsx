import { GetServerSideProps } from 'next';
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
  ModalityTitle,
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
                  <Link
                    href="/docs/REGULAMENTO_GERAL_LIGA_ESCOLAR_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Regulamento Geral
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <ModalityTitle>
              <Heading size="lg" color="gray-700">
                <span style={{ color: '#E96924' }}>MODALIDADES COLETIVAS</span>
              </Heading>
            </ModalityTitle>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Basquete
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_BASQUETE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Basquete
                    </Heading>
                  </Link>
                </RuleDetails>

                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_BASQUETE_3X3.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Basquete 3X3
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Futsal
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_FUTSAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Futsal
                    </Heading>
                  </Link>
                </RuleDetails>

                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_FUT7.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Fut7
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Handebol
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_HANDEBOL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Handebol
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Voleibol
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_VOLEIBOL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Voleibol
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <ModalityTitle>
              <Heading size="lg" color="gray-700">
                <span style={{ color: '#E96924' }}>
                  MODALIDADES INDIVIDUAIS
                </span>
              </Heading>
            </ModalityTitle>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Badminton
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_BADMINTON.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Badminton
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Ginástica Artística
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_GINASTICA_ARTISTICA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Ginástica Artística
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Judô
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_JUDO.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Judô
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Natação
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_NATACAO.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Natação
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Tênis de mesa
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_TENIS_DE_MESA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Tênis de mesa
                    </Heading>
                  </Link>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Xadrez
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Link
                    href="/docs/NORMAS_ESPECIFICAS_XADREZ.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadSimple size={24} />
                    <Heading size="md" color="gray-700">
                      Normas Específicas Xadrez
                    </Heading>
                  </Link>
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
