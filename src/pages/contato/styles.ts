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

  gap: '10rem',

  margin: '0 auto',
  padding: '6rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  // border: '1px solid red',
});

export const ContactContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',
  margin: '2rem 0 0 8rem',
  textAlign: 'left',

  // border: '1px solid red',
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
