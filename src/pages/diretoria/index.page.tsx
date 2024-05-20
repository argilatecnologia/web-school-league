import Head from 'next/head';

import { Text } from '@/components/Typography';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeAvatarImg from '../../assets/man-avatar.png';

import {
  DirectorshipContainer,
  DirectorshipContent,
  DirectorshipContentTitle,
  DirectorshipDivContainer,
  DirectorshipGridContent,
  DirectorsContentDetails,
  DirectorsLogoContentImage,
} from './styles';

export default function Directorship() {
  return (
    <>
      <DirectorshipContainer>
        <Head>
          <title>Diretoria | Liga Escolar</title>
        </Head>

        <Header />

        <DirectorshipContent>
          <DirectorshipContentTitle>
            {/* <Heading size="3xl" color="gray-700">
              Diretoria
            </Heading> */}
          </DirectorshipContentTitle>

          <DirectorshipDivContainer>
            <DirectorshipGridContent>
              <DirectorsContentDetails>
                <DirectorsLogoContentImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Júnior
                </Text>
              </DirectorsContentDetails>
              <DirectorsContentDetails>
                <DirectorsLogoContentImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  João
                </Text>
              </DirectorsContentDetails>
            </DirectorshipGridContent>
          </DirectorshipDivContainer>
        </DirectorshipContent>
      </DirectorshipContainer>

      <Footer />
    </>
  );
}
