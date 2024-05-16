import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const AboutContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  marginTop: '9rem',

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
  marginTop: '6rem',

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

  gap: '1rem',
  margin: '2rem 2.25rem 0 0',
  textAlign: 'justify',

  // border: '1px solid red',
});
