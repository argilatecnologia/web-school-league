import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const AssociatedCollegesContainer = styled('section', {
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  marginTop: '9rem',
});

export const AssociatedCollegesContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '2rem',

  // border: '1px solid orange',
});

export const AssociatedCollegesContentTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',

  marginTop: '2rem',
});

export const AssociatedCollegesDivContainer = styled('div', {
  display: 'flex',

  justifyContent: 'center',

  padding: '1rem',
  gap: '0.75rem',

  // border: '1px solid green',
});

export const AssociatedCollegesGridContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto',

  gap: '1.5rem',
});

export const AssociatedCollegesContentDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '0.5rem',

  // border: '1px solid blue',
});

export const AssociatedCollegesLogoContentImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray200',
});
