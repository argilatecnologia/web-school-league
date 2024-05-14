import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const AboutContainer = styled('div', {
  // height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const AboutContent = styled('div', {
  width: '100%',
  // maxWidth: 1280,

  display: 'flex',

  margin: '0 auto',
  marginTop: '2rem',
  padding: '2rem 0',
});

export const AboutContentImage = styled(Image, {
  width: '617px',
  height: '412px',
  flexShrink: 0,

  borderRadius: '0.25rem',
});

export const AboutRectangleImage = styled('div', {
  width: '581px',
  height: '405px',
  flexShrink: 0,

  margin: 'auto',

  borderRadius: '0.25rem',
  background: '#CCF4E6',
});

export const AboutTitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  margin: '0 auto',
  padding: '2rem 1rem',
});

export const AboutTextContent = styled('div', {
  width: '600px',

  textAlign: 'justify',

  marginTop: '1rem',
  lineHeight: '$short',
});
