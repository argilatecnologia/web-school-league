import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const GameContainer = styled('section', {
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  marginTop: '8rem',
});

export const GameContent = styled('div', {
  width: '100%',
  // maxWidth: 1280,

  display: 'flex',
  flexDirection: 'row',

  gap: '10rem',

  margin: '0 auto',
  marginTop: '4rem',
  padding: '2rem 0',

  // border: '1px solid blue',
});

export const GameContentTitle = styled('div', {
  height: 'auto',

  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',
  margin: '2rem 0 0 8rem',
  textAlign: 'center',

  // border: '1px solid blue',
});

export const GameContainerImage = styled('div', {
  position: 'relative',
  right: '3rem',

  '&::before': {
    // fazer assim, senão não funciona no Stitches
    content: "''",

    width: '100%',
    height: '100%',
    background: '$blue100',
    position: 'absolute',
    top: '-12.8%',
    left: '12%',
    zIndex: 0,

    borderRadius: '0.25rem',
  },
});

export const GameContentImage = styled(Image, {
  width: '35rem',
  height: '23.4rem',

  borderRadius: '0.25rem',

  position: 'relative',
});
