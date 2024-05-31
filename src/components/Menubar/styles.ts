import { styled } from '@/styles/stitches.config';

import { NavigationContainer } from './Navigation/styles';

// export const MenubarContainer = styled('menu', {
//   display: 'flex',
//   flexDirection: 'row',

//   height: '3.125rem',

//   marginTop: '1.25rem',

//   // border: '1px solid red',
// });

export const MenubarContainer = styled('section', {
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

  // backgroundColor: '$white25',
  background: `linear-gradient(90deg, #F9F9F9 0%, #F0F4F7 95%)`,

  opacity: 0,
  pointerEvents: 'none',

  svg: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },

  [`>${NavigationContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    gap: '0.25rem',
  },

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
    },
  },
});
