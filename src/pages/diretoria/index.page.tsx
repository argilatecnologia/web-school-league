import Head from 'next/head';

import { Heading, Text } from '@/components/Typography';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeAvatarImg from '../../assets/man-avatar.png';

import {
  DirectorshipContainer,
  DirectorshipContent,
  DirectorshipContentTitle,
  DirectorshipGridContainer,
  DirectorshipGridContent,
  DirectorsContentDetails,
  DirectorsLogoContentImage,
} from './styles';

export default function Directorship() {
  return (
    <>
      <DirectorshipContainer>
        <Head>
          <title>Parceria | Liga Escolar</title>
        </Head>

        <Header />

        <DirectorshipContent>
          <DirectorshipContentTitle>
            <Heading size="3xl" color="gray-700">
              Diretoria
            </Heading>
          </DirectorshipContentTitle>

          <DirectorshipGridContainer>
            <DirectorshipGridContent>
              <DirectorsContentDetails>
                <DirectorsLogoContentImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Severino Júnior
                </Text>
              </DirectorsContentDetails>
              <DirectorsContentDetails>
                <DirectorsLogoContentImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  João
                </Text>
              </DirectorsContentDetails>
              <DirectorsContentDetails>
                <DirectorsLogoContentImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  José
                </Text>
              </DirectorsContentDetails>
              <DirectorsContentDetails>
                <DirectorsLogoContentImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Antônio
                </Text>
              </DirectorsContentDetails>
            </DirectorshipGridContent>
          </DirectorshipGridContainer>
        </DirectorshipContent>
      </DirectorshipContainer>

      <Footer />
    </>
  );
}
