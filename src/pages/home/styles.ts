import { Heading } from '@/components/Typography';
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

  /* Media Queries <= 1024px */
  // '@media(width <= 1024px)': {
  //   margin: '0 auto',
  //   marginTop: '2rem',
  //   marginLeft: '3rem',

  //   [`>${Heading}`]: {
  //     fontSize: '$lg',
  //   },

  //   border: '1px solid red',
  // },

  // '@media(min-width: 1024px)': {
  //   margin: '0 auto',
  //   marginTop: '2rem',

  //   // border: '1px solid blue',
  // },

  // '@media(min-width: 1366px)': {
  //   // border: '1px solid black',
  // },

  /* Media Queries >= 1536px */
  '@media(width >= 1536px)': {
    margin: '0 auto',
    marginTop: '2rem',

    // border: '1px solid red',
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

  // Media Queries
  // '@media(max-width: 1024px)': {
  //   right: '5rem',

  //   '&::before': {
  //     height: '33%',
  //     top: '-4%',
  //   },
  // },

  // '@media(min-width: 1024px)': {
  //   right: '5rem',

  //   '&::before': {
  //     height: '33%',
  //     top: '-4%',
  //   },
  // },

  /* Media Queries >= 1536px */
  '@media(width >= 1536px)': {
    right: '8rem',

    '&::before': {
      height: '47%',
      top: '-5%',
    },

    // border: '1px solid green',
  },
});

export const HomeContentImage = styled(Image, {
  width: '35rem',
  height: '23.4rem',

  borderRadius: '0.25rem',

  position: 'relative',

  // Media Queries
  // '@media(max-width: 1024px)': {
  //   width: '30rem',
  //   height: '20.4rem',
  // },

  // '@media(min-width: 1024px)': {
  //   width: '30rem',
  //   height: '20.4rem',
  // },

  /* Media Queries >= 1536px */
  '@media(width >= 1536px)': {
    width: '40rem',
    height: '25.4rem',
  },
});
