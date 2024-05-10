import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const AboutContainer = styled('div', {
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
});

export const AboutContent = styled('div', {
  width: '100%',
  maxWidth: 1280,

  display: 'flex',

  margin: '0 auto',
  marginTop: '2rem',
  padding: '2rem 0',

  border: '1px solid red',
});

export const AboutContentImage = styled(Image, {
  width: '607px',
  height: '402px',

  borderRadius: '0.5rem',
});

export const AboutTitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  margin: '0 auto',
  padding: '2rem 1rem',

  border: '1px solid red',
});

export const AboutTextContent = styled('div', {});
