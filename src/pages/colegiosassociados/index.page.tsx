import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  AssociatedCollegesContainer,
  AssociatedCollegesContent,
  AssociatedCollegesInformations,
  AssociatedCollegesLogoContentImage,
  AssociatedCollegesDetailsInformations,
} from './styles';

export default function AssociatedColleges() {
  return (
    <>
      <AssociatedCollegesContainer>
        <Head>
          <title>Colégios Associados | Liga Escolar</title>
        </Head>

        <Header />

        <AssociatedCollegesContent>
          <AssociatedCollegesInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
          </AssociatedCollegesInformations>
        </AssociatedCollegesContent>

        <Footer />
      </AssociatedCollegesContainer>
    </>
  );
}
