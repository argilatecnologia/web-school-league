import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const PartnershipContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const PartnershipContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    padding: '3rem 0',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    padding: '3rem 0',
  },

  /* Media Queries min-width: 1040px */
  '@media(min-width: 1040px)': {
    padding: '3rem 0',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    padding: '3rem 0',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    padding: '4rem 0',
  },
});

export const PartnershipContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',

  marginBottom: '1.5rem',
});

export const PartnershipInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2rem',

  margin: '1rem 2.75rem 0',
});

export const PartnersContentDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',

  gap: '2.5rem',

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
  },
});

export const PartnershipImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray400',

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    padding: '0.125rem',

    width: '9rem',
    height: '9rem',
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    padding: '0.125rem',

    width: '9rem',
    height: '9rem',
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    padding: '0.125rem',

    width: '9rem',
    height: '9rem',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    padding: '0.125rem',

    width: '9rem',
    height: '9rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '9rem',
    height: '9rem',
  },
});
