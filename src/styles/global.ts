import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,

    padding: 0,

    boxSizing: 'border-box',

    scrollbarWidth: 'thin',
    scrollbarColor: 'orange orange',
  },

  '*::-webkit-scrollbar': {
    width: '6px',
  },

  '*::-webkit-scrollbar-track': {
    background: '$orange600',
  },

  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '$orange600',
    borderRadius: '10px',
    border: '3px solid $orange600',
  },

  body: {
    background: '$white25',

    color: '$gray500',

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
