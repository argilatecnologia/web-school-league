import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

import { Heading, Text } from '@/components/Typography';

export const HistoricContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const HistoricContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',

  gap: '4rem',
  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',

    gap: '1rem',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',

    gap: '1rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    display: 'flex',
    flexDirection: 'reverve-row',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    display: 'flex',
    flexDirection: 'reverve-row',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    display: 'flex',
    flexDirection: 'reverve-row',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    display: 'flex',
    flexDirection: 'reverve-row',
  },
});

export const HistoricContainerImage = styled('div', {
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

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    marginTop: '3rem',

    '&::before': {
      top: '-6.5%',
      left: '-10%',
    },
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    marginTop: '4rem',

    '&::before': {
      top: '-6.5%',
      left: '-10%',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    marginTop: '14rem',

    '&::before': {
      height: '40%',
      left: '-10%',
      top: '-5%',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    marginTop: '14rem',

    '&::before': {
      height: '50%',
      top: '-6.5%',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    marginTop: '14rem',

    '&::before': {
      height: '50%',
      top: '-6.5%',
    },
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

export const HistoricContentImage = styled(Image, {
  width: '35rem',
  height: '23.4rem',

  borderRadius: '0.25rem',

  position: 'relative',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    width: '22.5rem',
    height: '17rem',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    width: '42rem',
    height: '27rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    width: '25rem',
    height: '17.4rem',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    width: '29rem',
    height: '19.4rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    width: '32rem',
    height: '21.4rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '35rem',
    height: '23.4rem',
  },
});

export const HistoricContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',
  margin: '2rem 0 0.75rem 0',
  textAlign: 'justify',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    margin: '0 auto',

    padding: '1.5rem',

    [`>${Heading}`]: {
      textAlign: 'center',
      fontSize: '$lg',
    },

    [`>${Text}`]: {
      textAlign: 'justify',
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    margin: '0 auto',

    padding: '1.5rem',

    [`>${Heading}`]: {
      textAlign: 'center',
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      textAlign: 'justify',
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    [`>${Heading}`]: {
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      textAlign: 'justify',
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    [`>${Heading}`]: {
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      textAlign: 'justify',
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    [`>${Heading}`]: {
      fontSize: '$3xl',
    },

    [`>${Text}`]: {
      textAlign: 'justify',
      fontSize: '$lg',
    },
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    [`>${Heading}`]: {
      fontSize: '$3xl',
    },

    [`>${Text}`]: {
      textAlign: 'justify',
      fontSize: '$xl',
    },
  },
});
