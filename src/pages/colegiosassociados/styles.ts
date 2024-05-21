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

  margin: '0 auto',
  padding: '3rem 0',

  minHeight: 'calc(100vh - 10.625rem)',

  // border: '1px solid red',
});

export const AssociatedCollegesInformations = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',

  margin: '1rem 2.75rem 0',

  border: '1px solid green',
});

export const AssociatedCollegesDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  margin: '0 auto',

  gap: '2.5rem',

  border: '1px solid $blue200',
});

export const AssociatedCollegesImage = styled(Image, {
  width: '7.5rem',
  height: '7.5rem',

  borderRadius: '0.25rem',
  border: '1px solid $gray300',
});
