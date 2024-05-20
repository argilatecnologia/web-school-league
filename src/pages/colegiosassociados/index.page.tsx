import Head from 'next/head';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import fakeLogoImg from '../../assets/fake-logo.png';

import {
  AssociatedCollegesContainer,
  AssociatedCollegesContent,
  AssociatedCollegesContentTitle,
  AssociatedCollegesDivContainer,
  AssociatedCollegesGridContent,
  AssociatedCollegesContentDetails,
  AssociatedCollegesLogoContentImage,
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
          <AssociatedCollegesContentTitle>
            {/* <Heading size="3xl" color="gray-700">
              Colégios Associados
            </Heading> */}
          </AssociatedCollegesContentTitle>

          <AssociatedCollegesDivContainer>
            <AssociatedCollegesGridContent>
              <AssociatedCollegesContentDetails>
                <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              </AssociatedCollegesContentDetails>
              <AssociatedCollegesContentDetails>
                <AssociatedCollegesLogoContentImage src={fakeLogoImg} alt="" />
              </AssociatedCollegesContentDetails>
            </AssociatedCollegesGridContent>
          </AssociatedCollegesDivContainer>
        </AssociatedCollegesContent>
      </AssociatedCollegesContainer>

      <Footer />
    </>
  );
}
