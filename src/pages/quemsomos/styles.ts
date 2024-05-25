import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const AboutContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const AboutContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',

  gap: '4rem',
  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',
});

export const AboutContainerImage = styled('div', {
  position: 'relative',
  marginTop: '10rem',

  '&::before': {
    // fazer assim, senão não funciona no Stitches
    content: "''",

    width: '100%',
    height: '60%',
    background: '$blue100',
    position: 'absolute',
    top: '-12.8%',
    left: '-12%',
    zIndex: 0,

    borderRadius: '0.25rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    marginTop: '12.5rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    marginTop: '14rem',

    '&::before': {
      height: '50%',
      top: '-6.5%',
    },
  },
});

export const AboutContentImage = styled(Image, {
  width: '35rem',
  height: '23.4rem',

  borderRadius: '0.25rem',

  position: 'relative',

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    width: '32rem',
    height: '21.4rem',
  },
});

export const AboutContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',
  margin: '2rem 2.25rem 0.75rem 0',
  textAlign: 'justify',
});
