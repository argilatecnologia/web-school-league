import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { Header } from '@/components/Header';
import { Heading, Text } from '@/components/Typography';
import { Footer } from '@/components/Footer';

import backgroundImg from '../../assets/background-historic.png';

import {
  HistoricContainer,
  HistoricContent,
  HistoricContainerImage,
  HistoricContentImage,
  HistoricContentTitle,
} from './styles';

export default function WhoWeAre() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NextSeo
        title="Histórico | Liga Escolar "
        description="Liga escolar de esportes olímpicos e paralímpicos da cidade de Caruaru e circunvizinhas."
      />

      <HistoricContainer>
        <Head>
          <title>Histórico | Liga Escolar</title>
        </Head>

        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <HistoricContent>
          <HistoricContainerImage>
            <HistoricContentImage src={backgroundImg} alt="" />
          </HistoricContainerImage>

          <HistoricContentTitle>
            <Heading size="3xl" color="gray-700">
              Liga Escolar de Caruaru: Uma Década Fomentando o Esporte e a
              Educação (2014-2024)
            </Heading>

            {<br />}

            <Text size="md" color="gray-700">
              Em 2014, um marco histórico foi escrito para o esporte educacional
              de Caruaru. Um grupo de visionários professores de Educação
              Física, em parceria com gestores de escolas, idealizou e deu vida
              à Liga Escolar, um evento esportivo direcionado à rede particular
              de ensino do município. A iniciativa, nascida da união da
              infraestrutura das escolas com parcerias valiosas de associações e
              federações esportivas, rapidamente se consolidou como um grande
              sucesso em sua primeira edição.
              {<br />}
              {<br />}
              Ao longo dos anos seguintes, a Liga Escolar se tornou um evento
              anual imperdível, reunindo milhares de alunos, professores e
              familiares em torno da paixão pelo esporte. Mais do que
              competições, a Liga Escolar se consolidou como um espaço de
              confraternização, incentivo à prática esportiva, desenvolvimento
              de valores como disciplina, respeito e trabalho em equipe, e
              promoção da integração entre as escolas participantes.
              {<br />}
              {<br />}
              No entanto, em 2020, o mundo se viu diante de um desafio
              inesperado: a pandemia da COVID-19. Diante da necessidade de
              preservar a saúde e o bem-estar de todos, a edição daquele ano da
              Liga Escolar precisou ser adiada. Mas nem mesmo a pandemia foi
              capaz de apagar a chama do esporte educacional em Caruaru.
              {<br />}
              {<br />}
              Em 2023, a Liga Escolar retornou com força total, marcando um
              momento de retomada, superação e alegria para toda a comunidade
              escolar. A edição daquele ano foi ainda mais especial, pois
              celebramos 9 anos de sucesso da Liga, evidenciando o seu papel
              fundamental na formação de cidadãos completos e na promoção de um
              futuro mais saudável e promissor para as crianças e jovens de
              Caruaru.
              {<br />}
              {<br />}E agora, em 2024, chegamos a um momento ainda mais
              grandioso: a celebração dos 10 anos da Liga Escolar! Uma década de
              conquistas, sonhos realizados e a certeza de que o esporte
              continua sendo uma ferramenta poderosa para o desenvolvimento
              humano e para a construção de uma sociedade mais justa e fraterna.
              {<br />}
              {<br />}A Liga Escolar de Caruaru é, sem dúvida, um patrimônio do
              esporte educacional do município. Sua história inspiradora e seus
              resultados positivos demonstram o poder transformador do esporte
              quando aliado à educação de qualidade. Agradecemos a todos que
              contribuíram para o sucesso dessa iniciativa ao longo desses 10
              anos, especialmente aos professores, gestores, alunos, familiares,
              parceiros e patrocinadores.
              {<br />}
              {<br />}
              Que a Liga Escolar continue por muitos anos a fomentar o esporte,
              a educação e a união da comunidade caruaruense, construindo um
              futuro ainda mais brilhante para as nossas crianças e jovens!
            </Text>
          </HistoricContentTitle>
        </HistoricContent>

        <Footer />
      </HistoricContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
