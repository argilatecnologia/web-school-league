import { styled } from '@/styles/stitches.config';

export const FooterContainer = styled('footer', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$orange600',

  marginTop: 'auto',

  // border: '1px solid red',
});

export const FooterContent = styled('div', {
  width: '100%',
  height: '8rem',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0 3.25rem',

  // border: '1px solid blue',

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    padding: '0 2.5rem',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    padding: '0 3.25rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    padding: '0 3.25rem',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    padding: '0 3.25rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    padding: '0 3.25rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    padding: '0 3.25rem',
  },
});

export const FooterInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '0.125rem',
});

export const FooterDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  gap: '2rem',

  svg: {
    color: '$white25',
  },

  /* Media Queries min-width: 360px */
  '@media(min-width: 360px)': {
    flexDirection: 'column',

    gap: '0.25rem',
  },

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    flexDirection: 'row',

    gap: '2rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    flexDirection: 'row',

    gap: '2rem',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    flexDirection: 'row',

    gap: '2rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    flexDirection: 'row',

    gap: '2rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    flexDirection: 'row',

    gap: '2rem',
  },
});
