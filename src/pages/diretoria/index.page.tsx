import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Heading, Text } from '@/components/Typography';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeAvatarImg from '../../assets/man-avatar.png';

import {
  DirectorshipContainer,
  DirectorshipContent,
  DirectorshipContentTitle,
  DirectorshipInformations,
  DirectorshipDetailsInformations,
  DirectorshipDetails,
  DirectorshipImage,
} from './styles';

export default function Directorship() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

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

          <DirectorshipInformations>
            <DirectorshipDetailsInformations>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Júnior
                </Text>
              </DirectorshipDetails>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  José
                </Text>
              </DirectorshipDetails>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  João
                </Text>
              </DirectorshipDetails>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Júnior
                </Text>
              </DirectorshipDetails>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  José
                </Text>
              </DirectorshipDetails>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  João
                </Text>
              </DirectorshipDetails>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Júnior
                </Text>
              </DirectorshipDetails>
            </DirectorshipDetailsInformations>
          </DirectorshipInformations>
        </DirectorshipContent>

        <Footer />
      </DirectorshipContainer>
    </>
  );
}
