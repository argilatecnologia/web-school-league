import { styled } from '@/styles/stitches.config';

import { NavigationContainer } from './Navigation/styles';
import { ActiveLinkContent } from './ActiveLink/styles';

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

  [`${ActiveLinkContent}`]: {
    textDecoration: 'none',

    display: 'inline-block',
    alignItems: 'center',

    color: 'violet',
    fontWeight: '$medium',

    transition: '0.2s',

    position: 'relative',

    padding: '0 0.25rem',
    lineHeight: '2.3rem',
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

        [`${ActiveLinkContent}`]: {
          textDecoration: 'none',

          display: 'inline-block',
          alignItems: 'center',

          color: '$gray500',
          fontWeight: '$medium',

          transition: '0.2s',

          position: 'relative',

          padding: '0 0.25rem',
          lineHeight: '2.3rem',

          '&::after': {
            // fazer assim, senão não funciona no Stitches
            content: "''",

            position: 'absolute',
            display: 'block',
            width: 0,
            height: '3px',

            marginTop: '-0.125rem',
            left: 0,

            background: 'transparent',
            transition: 'all 0.3s',
          },

          '&:hover::after': {
            width: '100%',
            background: '$orange600',
          },

          variants: {
            active: {
              true: {
                fontWeight: '$bold',
                color: '$orange600',

                '&::after': {
                  // fazer assim, senão não funciona no Stitches
                  content: "''",

                  position: 'absolute',
                  width: 'stretch',
                  height: '3px',

                  marginTop: '0.5rem',
                  left: 3,

                  background: '$orange600',

                  opacity: 1,
                },
              },
            },
          },
        },
      },
    },
  },
});
