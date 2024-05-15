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

  display: 'flex',
  flexDirection: 'row',

  gap: '4rem',

  // border: '1px solid red',
});

export const AboutContainerImage = styled('div', {
  position: 'relative',
  // left: '3rem',

  marginTop: '4rem',

  '&::before': {
    // fazer assim, senão não funciona no Stitches
    content: "''",

    width: '100%',
    height: '60%',
    background: '$blue100',
    position: 'absolute',
    top: '-5.3%',
    left: '-18%',
    zIndex: 0,

    borderRadius: '0.25rem',
  },
});

export const AboutContentImage = styled(Image, {
  width: '35rem',
  height: '23.4rem',

  borderRadius: '0.25rem',

  position: 'relative',
});

export const AboutContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  margin: '0 auto',
  padding: '2rem 4rem 2rem 0',
  gap: '1rem',

  textAlign: 'justify',
});
