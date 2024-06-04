import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

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
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Colégios Associados | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <AssociatedCollegesContainer>
        <Head>
          <title>Colégios Associados | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <AssociatedCollegesContent>
          <AssociatedCollegesTitle>
            <Heading size="3xl" color="gray-700">
              NOSSOS COLÉGIOS ASSOCIADOS
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
