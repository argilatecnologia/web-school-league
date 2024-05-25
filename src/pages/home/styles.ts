import { Heading } from '@/components/Typography';
import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const HomeContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const HomeContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',

  gap: '6rem',

  margin: '0 auto',
  marginTop: '4rem',
  padding: '2.5rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  // border: '1px solid red',

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    gap: '7rem',
    padding: '5rem 0',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    padding: '5rem 0',
  },
});

export const HomeContentCenter = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
});

export const HomeContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  gap: '1rem',
  margin: '0 auto',
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

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    margin: '0 auto',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    margin: '0 auto',
    marginTop: '2rem',
  },
});

export const HomeContainerImage = styled('div', {
  position: 'relative',
  right: '8rem',

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

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    right: '7rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    right: '8rem',

    '&::before': {
      height: '100%',
    },
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

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    width: '32rem',
    height: '21.4rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '40rem',
    height: '25.4rem',
  },
});

export const HomePartners = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2rem',
  margin: '0 2.75rem 0',
});

export const HomePartnersTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginBottom: '1rem',
});

export const HomePartnersDetails = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',

  gap: '2.5rem',
});

export const HomePartnersImage = styled(Image, {
  width: '12.5rem',
  height: '8.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray400',

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '15.625rem',
    height: '9.375rem',
  },
});
