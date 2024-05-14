import Link from 'next/link';

import { styled } from '@/styles/stitches.config';

export const ActiveLinkContent = styled(Link, {
  textDecoration: 'none',

  display: 'inline-block',
  alignItems: 'center',

  color: '$gray500',
  fontWeight: '$medium',

  transition: '0.2s',

  position: 'relative',

  padding: '0 0.25rem',
  lineHeight: '3rem',

  '&::after': {
    // fazer assim, senão não funciona no Stitches
    content: "''",

    position: 'absolute',
    display: 'block',
    width: 0,
    height: '3px',

    marginTop: '0.80rem',
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

          marginTop: '0.80rem',
          left: 3,

          background: '$orange600',

          opacity: 1,
        },
      },
    },
  },
});
