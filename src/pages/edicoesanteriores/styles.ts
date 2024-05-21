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
});

export const PreviousEditionsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2.5rem',
  margin: '1rem 2.75rem 0',
});

export const PreviousEditionsDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',
  gap: '2.5rem',
});

export const PreviousEditionsDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  gap: '1rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray400',
});

export const PreviousEditionsImage = styled(Image, {
  width: '16.875rem',
  height: '12.5rem',
});
