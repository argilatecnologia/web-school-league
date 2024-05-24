import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heading } from '@/components/Typography';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  AssociatedCollegesContainer,
  AssociatedCollegesContent,
  AssociatedCollegesTitle,
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
          <AssociatedCollegesTitle>
            <Heading size="3xl" color="gray-700">
              Nossos colégios associados
            </Heading>
          </AssociatedCollegesTitle>

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
          </AssociatedCollegesInformations>
        </AssociatedCollegesContent>

        <Footer />
      </AssociatedCollegesContainer>
    </>
  );
}
