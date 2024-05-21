import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  AssociatedCollegesContainer,
  AssociatedCollegesContent,
  AssociatedCollegesInformations,
  AssociatedCollegesImage,
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
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            {/* <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations>
            <AssociatedCollegesDetailsInformations>
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
              <AssociatedCollegesImage src={fakeLogoImg} alt="" />
            </AssociatedCollegesDetailsInformations> */}
          </AssociatedCollegesInformations>
        </AssociatedCollegesContent>

        <Footer />
      </AssociatedCollegesContainer>
    </>
  );
}
