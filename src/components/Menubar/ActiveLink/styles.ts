import Link from 'next/link';

import { styled } from '@/styles/stitches.config';

export const ActiveLinkContent = styled(Link, {
  // textDecoration: 'none',

  // display: 'flex',
  // alignItems: 'center',

  // color: '$gray500',
  // fontWeight: '$medium',

  // transition: '0.2s',

  // position: 'relative',
  position: 'relative',
  color: '$gray500',
  textDecoration: 'none',
  display: 'flex',

  '&:hover': {
    // color: '$orange600',
    // width: '100%',
    // left: 0,
    // background: '#000',
  },

  '&::after': {
    content: "''",

    // position: 'absolute',
    // width: '100%',
    // height: '1px',
    // top: '100%',
    // left: 0,
    // background: '#ff7000',
    // transition: 'transform 0.5s',
    // // '0%': { transform: 'scaleX(0)' },
    // // transform: 'scaleX(0)',
    // transformOrigin: 'left',

    position: 'absolute',
    width: '100%',
    height: '3px',
    display: 'block',
    marginTop: '27px',
    right: 0,
    background: '##ff7000',
    transition: 'width .4s ease',
  },

  '&::hover::after': {
    // '100%': { transform: 'scaleX(1)' },
    // width: '100%',
    // left: 0,
    // background: '#000',
  },

  // '&::before': {
  //   // fazer assim, senão não funciona no Stitches
  //   content: "''",

  //   width: 4,
  //   height: 24,

  //   background: '$gradient-vertical',

  //   marginRight: '0.75rem',

  //   borderRadius: '2px',
  //   // borderRadius: '3px 3px 0 0',

  //   transition: '0.2s',

  //   // position: 'absolute',
  //   // bottom: 10,
  //   // left: -10,

  //   // para aparecer e sumir dinamicamente
  //   opacity: 0,
  // },

  variants: {
    active: {
      true: {
        fontWeight: '$bold',
        color: '$orange600',

        '&::before': {
          opacity: 1,
        },
      },
    },
  },
});
