import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const PartnershipContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  marginTop: '9rem',
});

export const PartnershipContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '2rem',

  // border: '1px solid orange',
});

export const PartnershipContentTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',

  marginTop: '2rem',
});

export const PartnershipDivContainer = styled('div', {
  width: '100%',
  display: 'flex',

  justifyContent: 'center',

  padding: '0 2.75rem 1rem 2.75rem',
  gap: '0.75rem',

  // border: '1px solid green',
});

export const PartnershipGridContent = styled('div', {
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(6, auto)',

  gap: '1.5rem',

  // border: '1px solid red',
});

export const PartnersContentDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '0.5rem',

  // border: '1px solid blue',
});

export const PartnersLogoContentImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray200',
});
