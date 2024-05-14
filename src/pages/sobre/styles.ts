import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const AboutContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  marginTop: '8rem',

  // border: '1px solid red',
});

export const AboutContent = styled('div', {
  width: '100%',
  // maxWidth: 1280,

  display: 'flex',
  flexDirection: 'row',

  gap: '4rem',

  margin: '0 auto',
  marginTop: '1rem',
  // padding: '2rem 0',
});

export const AboutContentImage = styled(Image, {
  width: '617px',
  height: '412px',

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

export const AboutContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  margin: '0 auto',
  padding: '2rem 1rem',
});
