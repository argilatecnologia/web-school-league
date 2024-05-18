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

export const DirectorshipGridContainer = styled('div', {
  display: 'flex',
  flexDirection: 'columns',

  justifyContent: 'center',

  border: '1px solid green',
});

export const DirectorshipGridContent = styled('div', {
  display: 'inline-grid',
  gridTemplateRows: 'minmax(200px, 1fr)',

  // repeat(auto-fit, minmax(100px, auto));

  gap: '2.5rem',

  border: '1px solid red',
});

export const DirectorsContentDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '0.5rem',

  // border: '1px solid blue',
});

export const DirectorsLogoContentImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray200',
});
