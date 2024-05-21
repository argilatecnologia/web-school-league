import Head from 'next/head';

import { Text } from '@/components/Typography';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeAvatarImg from '../../assets/man-avatar.png';

import {
  DirectorshipContainer,
  DirectorshipContent,
  DirectorshipInformations,
  DirectorshipDetailsInformations,
  DirectorshipDetails,
  DirectorshipImage,
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
              {/* <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Júnior
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
                  Júnior
                </Text>
              </DirectorshipDetails>
              <DirectorshipDetails>
                <DirectorshipImage src={fakeAvatarImg} alt="" />
                <Text size="md" color="gray-700">
                  Júnior
                </Text>
              </DirectorshipDetails> */}
            </DirectorshipDetailsInformations>
          </DirectorshipInformations>
        </DirectorshipContent>

        <Footer />
      </DirectorshipContainer>
    </>
  );
}
