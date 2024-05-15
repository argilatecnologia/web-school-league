import { Header } from '@/components/Header';
import Head from 'next/head';

import backgroundImg from '../../assets/background-about.png';

import { Heading, Text } from '@/components/Typography';

import {
  AboutContainer,
  AboutContent,
  AboutContainerImage,
  AboutContentImage,
  AboutContentTitle,
} from './styles';

export default function About() {
  return (
    <AboutContainer>
      <Head>
        <title>Sobre | Liga Escolar</title>
      </Head>

      <Header />

      <AboutContent>
        <AboutContainerImage>
          <AboutContentImage src={backgroundImg} alt="" />
        </AboutContainerImage>

        <AboutContentTitle>
          <Heading size="lg" color="gray-700">
            Sobre nós
          </Heading>

          <Text size="md" color="gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus.
            {<br />}
            {<br />}
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
            pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
            luctus, nunc finibus elementum suscipit, tortor augue vulputate
            sapien, vitae feugiat enim augue sed. Quisque id aliquam elit.{' '}
            {<br />}
            {<br />}
            Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod
            dictum. Sed sodales est efficitur arcu tincidunt tincidunt.
            Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt
            tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget
            dui at sem ullamcorper luctus.
            {<br />}
            {<br />}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus.
            {<br />}
            {<br />}
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
            pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
            luctus, nunc finibus elementum suscipit, tortor augue vulputate
            sapien, vitae feugiat enim augue sed. Quisque id aliquam elit.{' '}
            {<br />}
            {<br />}
            Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod
            dictum. Sed sodales est efficitur arcu tincidunt tincidunt.
            Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt
            tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget
            dui at sem ullamcorper luctus.
          </Text>
        </AboutContentTitle>
      </AboutContent>
    </AboutContainer>
  );
}
