import { styled } from '@/styles/stitches.config';

import { Heading, Text } from '@/components/Typography';

import Image from 'next/image';

export const PreviousEditionsContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const PreviousEditionsContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',
});

export const PreviousEditionsContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',

  marginBottom: '1.5rem',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    marginLeft: '1rem',
    marginRight: '1rem',

    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$xl',
    },

    [`${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    marginLeft: '1rem',
    marginRight: '1rem',

    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$2xl',
    },

    [`${Text}`]: {
      fontSize: '$lg',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    marginLeft: '1rem',
    marginRight: '1rem',

    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$2xl',
    },

    [`${Text}`]: {
      fontSize: '$lg',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$3xl',
    },

    [`${Text}`]: {
      fontSize: '$xl',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$3xl',
    },

    [`${Text}`]: {
      fontSize: '$xl',
    },
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$3xl',
    },

    [`${Text}`]: {
      fontSize: '$xl',
    },
  },
});

export const PreviousEditionsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2.5rem',
  margin: '3rem 2.75rem 0',
});

export const PreviousEditionsDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',
  gap: '2.75rem',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
});

export const PreviousEditionsDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  gap: '1rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray400',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    height: '19rem',
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',

    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$xl',
    },
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    height: '19rem',
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    height: '19rem',
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    height: '19rem',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    height: '19rem',
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    height: '19rem',
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },
});

export const PreviousEditionsImage = styled(Image, {
  width: '16.875rem',
  height: '12.5rem',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    padding: '0.125rem',

    width: '16rem',
    height: '12rem',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    padding: '0.125rem',

    width: '18rem',
    height: '14rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    padding: '0.125rem',

    width: '18rem',
    height: '14rem',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    padding: '0.125rem',

    width: '18rem',
    height: '14rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    padding: '0.125rem',

    width: '16.5rem',
    height: '14rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    padding: '0.125rem',

    width: '16rem',
    height: '14rem',
  },
});
