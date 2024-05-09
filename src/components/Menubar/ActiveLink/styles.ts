import Link from 'next/link';

import { styled } from '@/styles/stitches.config';

export const ActiveLinkContent = styled(Link, {
  textDecoration: 'none',

  display: 'flex',
  alignItems: 'center',

  color: '$gray500',
  fontWeight: '$medium',

  transition: '0.2s',

  // display: 'inline-block',
  position: 'relative',

  '&:hover': {
    color: '$orange600',
  },

  '&::before': {
    // fazer assim, senão não funciona no Stitches
    content: "''",

    width: 4,
    height: 24,

    background: '$gradient-vertical',

    marginRight: '0.75rem',

    borderRadius: '2px',
    // borderRadius: '3px 3px 0 0',

    transition: '0.2s',

    // position: 'absolute',
    // bottom: 10,
    // left: -10,

    // para aparecer e sumir dinamicamente
    opacity: 0,
  },

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
