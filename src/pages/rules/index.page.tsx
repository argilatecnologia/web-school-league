import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

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
  RuleDivider,
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
              Fique por dentro do regulamento geral e das normas da Liga Escolar{' '}
              {new Date().getFullYear()}
            </Text>
          </RuleContentTitle>

          <RuleContainerInformations>
            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Junho de 2024
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <RuleDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>
                <RuleDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <RuleDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>

                <RuleDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <RuleDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Julho de 2024
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <RuleDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>
                <RuleDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <RuleDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>
              </RuleDetailsInformations>
            </RuleContentInformations>

            <RuleContentInformations>
              <RuleMonthTitle>
                <Heading size="lg" color="gray-700">
                  Agosto de 2024
                </Heading>
              </RuleMonthTitle>

              <RuleDetailsInformations>
                <RuleDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <RuleDivider />

                  <Heading size="md" color="gray-700">
                    Título do evento
                  </Heading>
                </RuleDetails>
                <RuleDetails>
                  <Text size="md" color="gray-700">
                    Data - Hora
                  </Text>

                  <RuleDivider />

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
