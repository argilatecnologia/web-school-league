import { styled } from '@/styles/stitches.config';

export const ContactContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  // border: '1px solid black',
});

export const ContactContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  gap: '12rem',

  margin: '0 auto',
  padding: '4rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  // border: '1px solid red',

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    padding: '8rem 0',
    gap: '4rem',
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

  gap: '1rem',
  margin: '2rem 0 0 3rem',
  textAlign: 'left',

  '@media(min-width: 1024px)': {
    margin: '2rem 0 0 1.5rem',
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

  marginTop: '0.5rem',

  a: {
    display: 'flex',

    alignItems: 'center',

    gap: '0.25rem',
  },
});

export const ContactInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',
  marginTop: '5rem',
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
