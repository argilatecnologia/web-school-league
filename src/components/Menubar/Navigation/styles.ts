import { styled } from '@/styles/stitches.config';

export const NavigationContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  gap: '1.5rem',

  fontSize: '$lg',
  fontWeight: '$bold',

  // border: '1px solid green',
});

export const NavigationContentMenu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  opacity: 0,
  visibility: 'hidden',

  background: '$white25',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,

  textAlign: 'center',

  '&.show': {
    opacity: 1,
    visibility: 'visible',

    display: 'grid',
    gap: '3rem',
    placeContent: 'center',
  },
});

export const NavigationContentShowMenu = styled('div', {});

export const NavigationContentCloseMenu = styled('div', {});
