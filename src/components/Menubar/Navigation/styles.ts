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

  // '&.show .icon-close': {
  //   opacity: 1,
  //   visibility: 'visible',
  // },
});

export const NavigationContentShowMenu = styled('div', {
  '&.icon-menu': {
    color: '$orange600',
  },
});

export const NavigationContentCloseMenu = styled('div', {
  visibility: 'visible',
  opacity: 1,

  svg: {
    position: 'absolute',
    right: '2rem',
    color: '$orange600',
  },

  '&.icon-close': {
    visibility: 'hidden',
    opacity: 0,

    svg: {
      position: 'absolute',
      right: '2rem',
      color: '$orange600',
    },
  },

  variants: {
    active: {
      true: {
        // svg: {
        //   visibility: 'visible',
        //   opacity: 1,
        //   position: 'absolute',
        //   right: '2rem',
        //   color: '$orange600',
        // },
        visibility: 'visible',
      },
    },
  },

  // border: '1px solid red',
});
