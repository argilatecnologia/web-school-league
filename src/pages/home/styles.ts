import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const HomeContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  // border: '1px solid black',
});

export const HomeContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',

  gap: '8rem',

  margin: '0 auto',
  marginTop: '4rem',
  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  // border: '1px solid red',
});

export const HomeContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',
  margin: '2rem 0 0 6rem',
  textAlign: 'center',

  '@media(min-width: 1900px)': {
    margin: '0 auto',
    marginTop: '2rem',
  },
});

export const HomeContainerImage = styled('div', {
  position: 'relative',
  right: '2.5rem',

  '&::before': {
    // fazer assim, senão não funciona no Stitches
    content: "''",

    width: '100%',
    height: '100%',
    background: '$blue100',
    position: 'absolute',
    top: '-12.8%',
    left: '10%',
    zIndex: 0,

    borderRadius: '0.25rem',
  },

  '@media(min-width: 1900px)': {
    position: 'relative',
    right: '15rem',

    '&::before': {
      height: '33%',
      top: '-4%',
    },

    // border: '1px solid green',
  },
});

export const HomeContentImage = styled(Image, {
  width: '35rem',
  height: '23.4rem',

  borderRadius: '0.25rem',

  position: 'relative',
});
