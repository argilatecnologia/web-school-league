import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,

    padding: 0,

    boxSizing: 'border-box',

    /* Works on Firefox */
    scrollbarWidth: 'thin' /* "auto" or "thin" */,
    scrollbarColor: 'orange orange' /* scroll thumb and track */,
  },

  /* Works on Chrome, Edge, and Safari */
  '*::-webkit-scrollbar': {
    width: '6px' /* width of the entire scrollbar */,
  },

  '*::-webkit-scrollbar-track': {
    background: '$orange600' /* color of the tracking area */,
  },

  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '$orange600' /* color of the scroll thumb */,
    borderRadius: '10px' /* roundness of the scroll thumb */,
    border: '3px solid $orange600' /* creates padding around scroll thumb */,
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
