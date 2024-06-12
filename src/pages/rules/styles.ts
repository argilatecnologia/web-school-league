import { styled } from '@/styles/stitches.config';

import { Heading, Text } from '@/components/Typography';

export const RuleContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const RuleContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  padding: '3rem 3.5rem 2rem 3rem',

  minHeight: 'calc(100vh - 10.625rem)',
});

export const RuleContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',

  marginBottom: '2.5rem',

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

export const RuleContainerInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2.5rem',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    width: '100%',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    width: '100%',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    width: '100%',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    width: '100%',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    width: '100%',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '100%',
  },
});

export const RuleContentInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1.5rem',
});

export const RuleMonthTitle = styled('div', {
  display: 'flex',
});

export const RuleDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1.5rem',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    flexDirection: 'column',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    flexDirection: 'column',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    flexDirection: 'column',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    flexDirection: 'column',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    flexDirection: 'column',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    flexDirection: 'column',
  },
});

export const RuleDetails = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  alignItems: 'center',
  justifyContent: 'center',

  gap: '1rem',

  borderRadius: '0.25rem',
  border: '0.5px solid rgba(242, 242, 242)',

  '-webkit-box-shadow': '0px 1px 1px $white750',
  '-moz-box-shadow': '0px 1px 1px $white750',
  boxShadow: '0px 2px 12px rgba(51, 51, 51, 0.3)',

  a: {
    display: 'flex',

    alignItems: 'center',

    gap: '0.5rem',
  },

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    height: '5rem',

    textAlign: 'center',

    [`${Heading}`]: {
      fontSize: '$md',
    },

    [`${Text}`]: {
      fontSize: '$md',
      paddingRight: '1rem',
    },
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },
});
