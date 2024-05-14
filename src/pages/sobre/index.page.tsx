import { Header } from '@/components/Header';
import Head from 'next/head';

import {
  AboutContainer,
  AboutContent,
  AboutContentImage,
  AboutTitleContainer,
  AboutTextContent,
  AboutRectangleImage,
} from './styles';

import backgroundImg from '../../assets/background-img.png';
import { Heading, Text } from '@/components/Typography';

export default function About() {
  return (
    <AboutContainer>
      <Head>
        <title>Sobre | Liga Escolar</title>
      </Head>

      <Header />

      <AboutContent>
        <AboutRectangleImage>
          <AboutContentImage src={backgroundImg} alt="" />
        </AboutRectangleImage>

        <AboutTitleContainer>
          <Heading size="lg" color="gray-700">
            Sobre nós
          </Heading>

          <AboutTextContent>
            <Text size="md" color="gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis arcu quis nisi luctus, id accumsan felis
              tristique. Proin quis bibendum diam. Sed consequat nisl laoreet
              eros ultricies pellentesque. Nullam in est porta, pellentesque
              massa vitae, vehicula risus.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis arcu quis nisi luctus, id accumsan felis
              tristique. Proin quis bibendum diam. Sed consequat nisl laoreet
              eros ultricies pellentesque. Nullam in est porta, pellentesque
              massa vitae, vehicula risus.
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
            </Text>
          </AboutTextContent>
        </AboutTitleContainer>
      </AboutContent>
    </AboutContainer>
  );
}
