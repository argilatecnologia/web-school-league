import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Heading, Text } from '@/components/Typography';
import { Footer } from '@/components/Footer';

import backgroundImg from '../../assets/background-about.png';

import {
  AboutContainer,
  AboutContent,
  AboutContainerImage,
  AboutContentImage,
  AboutContentTitle,
  AboutContentTextItem,
} from './styles';

export default function WhoWeAre() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Quem Somos | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <AboutContainer>
        <Head>
          <title>Quem Somos | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <AboutContent>
          <AboutContainerImage>
            <AboutContentImage src={backgroundImg} alt="" />
          </AboutContainerImage>

          <AboutContentTitle>
            <Heading size="3xl" color="gray-700">
              Quem somos
            </Heading>

            {<br />}

            <Text size="md" color="gray-700">
              {' '}
              <strong>Uma chama acesa pelo esporte e pela educação.</strong>
            </Text>

            <Text size="md" color="gray-700">
              Somos a Liga Escolar, um evento estudantil idealizado por
              professores de Educação Física em 2014, com a missão de ampliar as
              oportunidades no mercado de trabalho e manter viva a chama do
              esporte educacional na rede privada de Caruaru e cidades vizinhas.
              {<br />}
              {<br />}
              <strong>Mais que um evento, um movimento.</strong>
              {<br />}
              {<br />}A Liga Escolar transcende a arena das competições. Somos
              um movimento que:
              {<br />}
              <AboutContentTextItem>
                - <strong>Promove a integração: </strong>Reunimos estudantes de
                diversas escolas, fomentando a amizade, o respeito e o espírito
                de equipe.
                {<br />}- <strong>Incentiva a prática esportiva: </strong>
                Acreditamos no poder transformador do esporte e na sua
                importância para o desenvolvimento físico, mental e social dos
                jovens.
                {<br />}- <strong>Descobre talentos: </strong>Revelamos novos
                atletas e impulsionamos a formação de futuros profissionais da
                área de Educação Física.
                {<br />}- <strong>Contribui para a formação integral: </strong>
                Através do esporte, educamos para valores como disciplina,
                responsabilidade, fair play e superação.
              </AboutContentTextItem>
              <strong>Nossa história, nossa marca.</strong>
              {<br />}
              {<br />}
              Ao longo dos anos, a Liga Escolar se consolidou como um dos
              principais eventos esportivos estudantis da região. Mais do que um
              campeonato, construímos uma história de conquistas, sonhos e
              realizações.
              {<br />}
              {<br />}
              <strong>Junte-se a nós!</strong>
              {<br />}
              {<br />}
              Se você é apaixonado por esporte e educação, a Liga Escolar é o
              seu lugar! Participe das nossas competições, torça pelos seus
              favoritos e faça parte desse movimento que transforma vidas
              através do esporte.
              {<br />}
              {<br />}
              <strong>#LigaEscolar #Esporte #Educação #Caruaru</strong>
            </Text>
          </AboutContentTitle>
        </AboutContent>

        <Footer />
      </AboutContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
