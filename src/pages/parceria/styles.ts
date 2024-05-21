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
});

export const PartnershipContentTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',

  marginBottom: '1rem',
});

export const PartnershipInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2rem',

  margin: '1rem 2.75rem 0',

  // border: '1px solid green',
});

export const PartnersContentDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',

  gap: '2.5rem',

  // border: '1px solid blue',
});

export const PartnershipImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray400',
});
