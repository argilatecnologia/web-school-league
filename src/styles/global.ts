import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,

    padding: 0,

    boxSizing: 'border-box',
  },

  body: {
    background: '$white25',

    color: '$gray200',

    '-webkit-font-smoothing': 'antialiased',

    outline: 'none',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',

    fontWeight: 400,

    border: 'none',

    outline: 'none',
  },

  a: {
    color: 'inherit',

    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
  },
});
