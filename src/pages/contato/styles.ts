import { styled } from '@/styles/stitches.config';

import { Heading, Text } from '@/components/Typography';

export const ContactContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const ContactContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  minHeight: 'calc(100vh - 10.625rem)',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    flexDirection: 'column',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    flexDirection: 'row',

    paddingBottom: '8rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    flexDirection: 'row',

    paddingBottom: '8rem',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    flexDirection: 'row',

    paddingTop: '8rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    flexDirection: 'row',

    paddingTop: '8rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    flexDirection: 'row',

    paddingTop: '8rem',
  },
});

export const ContactContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1.5rem',
  margin: '2rem 0 0 2.5rem',
  paddingBottom: '5rem',

  textAlign: 'left',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    paddingRight: '0.25rem',

    marginLeft: '2.5rem',
    marginRight: '2.5rem',

    [`>${Heading}`]: {
      fontSize: '$xl',
    },

    [`>${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    paddingRight: '0.5rem',

    textAlign: 'left',

    [`>${Heading}`]: {
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      fontSize: '$sm',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    paddingRight: '0.5rem',

    textAlign: 'left',

    [`>${Heading}`]: {
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    paddingRight: '10rem',

    [`>${Heading}`]: {
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    paddingRight: '17rem',

    [`>${Heading}`]: {
      fontSize: '$3xl',
    },

    [`>${Text}`]: {
      fontSize: '$lg',
    },
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    paddingRight: '25rem',

    [`>${Heading}`]: {
      fontSize: '$4xl',
    },

    [`>${Text}`]: {
      fontSize: '$xl',
    },
  },
});

export const ContactButtonLink = styled('div', {
  width: '14.375rem',
  height: '3.125rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 6,

  fontWeight: '$medium',

  color: '$white25',
  background: '$orange600',

  marginTop: '1.5rem',

  a: {
    display: 'flex',

    alignItems: 'center',

    gap: '0.5rem',
  },
});

export const ContactInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',
  marginLeft: '2.5rem',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    paddingLeft: '0.25rem',

    marginLeft: '2.5rem',
    marginRight: '2.5rem',

    [`${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    paddingTop: '5rem',
    paddingLeft: '0.5rem',

    [`${Text}`]: {
      fontSize: '$sm',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    paddingTop: '5rem',
    paddingLeft: '0.5rem',

    [`${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    paddingTop: '5rem',
    paddingRight: '2rem',

    [`${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    paddingTop: '5rem',
    paddingRight: '4rem',

    [`${Text}`]: {
      fontSize: '$lg',
    },
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    paddingTop: '5rem',
    paddingRight: '7rem',

    [`${Text}`]: {
      fontSize: '$xl',
    },
  },
});

export const ContactDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  gap: '0.5rem',

  svg: {
    color: '$orange600',
  },
});
