import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const DirectorshipContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const DirectorshipContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',

  margin: '0 auto',
  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',
});

export const DirectorshipInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2rem',

  margin: '1rem 2.75rem 0',
});

export const DirectorshipDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',
  gap: '3rem',
});

export const DirectorshipDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  gap: '1rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray400',
});

export const DirectorshipImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  marginTop: '0.125rem',
});
