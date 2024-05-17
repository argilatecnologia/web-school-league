import Head from 'next/head';

import { Heading } from '@/components/Typography';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  DirectorsLogoContainer,
  DirectorsLogoContentImage,
  DirectorshipContainer,
  DirectorshipContent,
  DirectorshipContentTitle,
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

          <DirectorsLogoContainer>
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />

            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
            <DirectorsLogoContentImage src={fakeLogoImg} alt="" />
          </DirectorsLogoContainer>
        </DirectorshipContent>
      </DirectorshipContainer>

      <Footer />
    </>
  );
}
