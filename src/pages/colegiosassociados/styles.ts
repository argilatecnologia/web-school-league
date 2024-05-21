import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const AssociatedCollegesContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  // border: '1px solid black',
});

export const AssociatedCollegesContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',

  gap: '10rem',

  margin: '0 auto',
  padding: '3rem 0',

  border: '1px solid red',
});

export const AssociatedCollegesInformations = styled('div', {
  width: '100%',
  // height: '100vh',

  display: 'flex',
  flexDirection: 'column',

  padding: '0 2.75rem 0 2.75rem',
  gap: '0.75rem',

  border: '1px solid green',
});

export const AssociatedCollegesDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  margin: '0 auto',

  gap: '1.5rem',

  border: '1px solid blue',
});

export const AssociatedCollegesLogoContentImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray200',
});
