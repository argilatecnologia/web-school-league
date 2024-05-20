import { styled } from '@/styles/stitches.config';

export const FooterContainer = styled('footer', {
  width: '100%',
  // height: '8rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$orange600',

  border: '1px solid red',
});

export const FooterContent = styled('div', {
  width: '100%',
  height: '8rem',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0 3.25rem',

  border: '1px solid blue',
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
});
