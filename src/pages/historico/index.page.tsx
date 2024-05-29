import Head from 'next/head';

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
  return (
    <>
      <HistoricContainer>
        <Head>
          <title>Histórico | Liga Escolar</title>
        </Head>

        <Header />

        <HistoricContent>
          <HistoricContainerImage>
            <HistoricContentImage src={backgroundImg} alt="" />
          </HistoricContainerImage>

          <HistoricContentTitle>
            <Heading size="3xl" color="gray-700">
              Histórico
            </Heading>

            <Text size="md" color="gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              illum quae non laudantium earum eligendi, culpa in minus
              asperiores voluptatum aperiam nam! Odit consectetur explicabo
              omnis fuga esse perspiciatis porro! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellat quis vel dolorem. Neque
              labore, odio ab veritatis error magni, esse laboriosam fugiat id
              quam vitae. Dolores odit soluta architecto adipisci? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aliquid quisquam et
              iure autem magni doloremque nihil earum laudantium repellat
              ducimus! Maiores, et excepturi ut dolore ullam fugiat unde
              accusamus nulla?
              {<br />}
              {<br />}
              In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
              pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
              luctus, nunc finibus elementum suscipit, tortor augue vulputate
              sapien, vitae feugiat enim augue sed. Quisque id aliquam elit.{' '}
              {<br />}
              {<br />}
              Suspendisse congue pharetra maximus. Duis rutrum velit a leo
              euismod dictum. Sed sodales est efficitur arcu tincidunt
              tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl
              nulla tincidunt tellus, elementum elementum lorem nisl eleifend
              dolor. Nullam eget dui at sem ullamcorper luctus.
              {<br />}
              {<br />}
            </Text>
          </HistoricContentTitle>
        </HistoricContent>

        <Footer />
      </HistoricContainer>
    </>
  );
}
