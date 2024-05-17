import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const DirectorshipContainer = styled('section', {
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  marginTop: '9rem',
});

export const DirectorshipContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '2.5rem',

  // border: '1px solid orange',
});

export const DirectorshipContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '2rem',
});

export const DirectorsLogoContainer = styled('div', {
  height: '100%',

  display: 'inline-grid',
  gridTemplateColumns: 'repeat(7, 1fr)',

  gap: '2.5rem',
});

export const DirectorsNameContent = styled('div', {
  height: '100%',

  display: 'inline-grid',
  gridTemplateColumns: 'repeat(7, 1fr)',

  gap: '2.5rem',
});

export const DirectorsLogoContentImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray200',
});
