import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading } from '@/components/Typography';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  PreviousEditionsContainer,
  PreviousEditionsContent,
  PreviousEditionsInformations,
  PreviousEditionsDetailsInformations,
  PreviousEditionsDetails,
  PreviousEditionsImage,
} from './styles';

export default function PreviousEditions() {
  return (
    <>
      <PreviousEditionsContainer>
        <Head>
          <title>Edições Anteriores | Liga Escolar</title>
        </Head>

        <Header />

        <PreviousEditionsContent>
          <PreviousEditionsInformations>
            <PreviousEditionsDetailsInformations>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
            </PreviousEditionsDetailsInformations>
            {/* <PreviousEditionsDetailsInformations>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
              <PreviousEditionsDetails>
                <PreviousEditionsImage src={fakeLogoImg} alt="" />
                <Heading size="md" color="gray-700">
                  Título do evento
                </Heading>
              </PreviousEditionsDetails>
            </PreviousEditionsDetailsInformations> */}
          </PreviousEditionsInformations>
        </PreviousEditionsContent>

        <Footer />
      </PreviousEditionsContainer>
    </>
  );
}
