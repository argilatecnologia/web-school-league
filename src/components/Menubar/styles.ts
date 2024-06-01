import { styled } from '@/styles/stitches.config';

import { NavigationContainer } from './Navigation/styles';

export const MenubarContainer = styled('menu', {
  display: 'flex',
  flexDirection: 'row',

  height: '3.125rem',

  marginTop: '4.5rem',

  // border: '1px solid red',
});

export const MenubarContainerMobile = styled('section', {
  position: 'absolute',
  backdropFilter: 'blur(3px)',

  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 5,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: `linear-gradient(90deg, #F9F9F9 0%, #F0F4F7 95%)`,

  opacity: 0,
  pointerEvents: 'none',

  transition: '0.5s',
  transform: 'translateY(50px)',

  svg: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    transform: 'rotate(45deg)',
    transition: '0.7s',
  },

  [`>${NavigationContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    gap: '0.25rem',

    transform: 'scale(0.7)',
    transition: '0.7s',
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
        transform: 'translateY(0px)',

        svg: {
          transform: 'rotate(0deg)',
        },

        [`>${NavigationContainer}`]: {
          transform: 'scale(1.25)',
        },
      },
    },
  },
});
