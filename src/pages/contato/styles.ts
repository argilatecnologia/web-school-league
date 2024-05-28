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

  gap: '5rem',

  minHeight: 'calc(100vh - 10.625rem)',

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    flexDirection: 'column',

    paddingBottom: '6rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    flexDirection: 'column',

    paddingBottom: '6rem',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    flexDirection: 'row',

    paddingTop: '8rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    flexDirection: 'row',

    padding: '7rem 0',

    border: '1px solid red',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    padding: '10rem 0',
    gap: '14rem',
  },
});

export const ContactContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1.5rem',
  margin: '2rem 0 0 2.5rem',
  textAlign: 'left',

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    paddingLeft: '0.5rem',

    [`>${Heading}`]: {
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      fontSize: '$sm',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    paddingLeft: '0.5rem',

    [`>${Heading}`]: {
      fontSize: '$2xl',
    },

    [`>${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    paddingRight: '8rem',

    [`>${Heading}`]: {
      fontSize: '$3xl',
    },

    [`>${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    marginRight: '12.5rem',

    [`>${Heading}`]: {
      fontSize: '$4xl',
    },

    [`>${Text}`]: {
      fontSize: '$lg',
    },
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    margin: '2rem 0 0 6rem',
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

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    paddingLeft: '0.5rem',

    [`${Text}`]: {
      fontSize: '$sm',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    paddingLeft: '0.5rem',

    [`${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    padding: '5rem 7rem 0 0',

    [`${Text}`]: {
      fontSize: '$md',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    margin: '5rem 5rem 0 0',

    [`${Text}`]: {
      fontSize: '$lg',
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
