import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading } from '@/components/Typography';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  PreviousEditionsContainer,
  PreviousEditionsContent,
  PreviousEditionsDivContainer,
  PreviousEditionsGridContent,
  PreviousEditionsContentDetails,
  PreviousEditionsLogoContentImage,
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
          <PreviousEditionsDivContainer>
            <PreviousEditionsGridContent>
              <PreviousEditionsContentDetails>
                <PreviousEditionsLogoContentImage src={fakeLogoImg} alt="" />
                <Heading size="lg" color="gray-700">
                  Título
                </Heading>
              </PreviousEditionsContentDetails>
              <PreviousEditionsContentDetails>
                <PreviousEditionsLogoContentImage src={fakeLogoImg} alt="" />
                <Heading size="lg" color="gray-700">
                  Título
                </Heading>
              </PreviousEditionsContentDetails>
              <PreviousEditionsContentDetails>
                <PreviousEditionsLogoContentImage src={fakeLogoImg} alt="" />
                <Heading size="lg" color="gray-700">
                  Título
                </Heading>
              </PreviousEditionsContentDetails>
              <PreviousEditionsContentDetails>
                <PreviousEditionsLogoContentImage src={fakeLogoImg} alt="" />
                <Heading size="lg" color="gray-700">
                  Título
                </Heading>
              </PreviousEditionsContentDetails>
              <PreviousEditionsContentDetails>
                <PreviousEditionsLogoContentImage src={fakeLogoImg} alt="" />
                <Heading size="lg" color="gray-700">
                  Título
                </Heading>
              </PreviousEditionsContentDetails>
            </PreviousEditionsGridContent>
          </PreviousEditionsDivContainer>
        </PreviousEditionsContent>

        <Footer />
      </PreviousEditionsContainer>
    </>
  );
}
