import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const PreviousEditionsContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const PreviousEditionsContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  // border: '1px solid black',
});

export const PreviousEditionsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2.5rem',
  margin: '1rem 2.75rem 0',

  // border: '1px solid blue',
});

export const PreviousEditionsDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',
  gap: '2.5rem',

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',

    // border: '1px solid red',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',

    // border: '1px solid blue',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',

    // border: '1px solid green',
  },
});

export const PreviousEditionsDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  gap: '1rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray400',

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    height: '17rem',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    height: '17rem',
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    height: '17rem',
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',

    gap: '1.5rem',

    textAlign: 'center',
  },
});

export const PreviousEditionsImage = styled(Image, {
  width: '16.875rem',
  height: '12.5rem',

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    width: '15rem',
    height: '12rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    width: '15.5rem',
    height: '12rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '19.375rem',
    height: '12.5rem',
  },
});
