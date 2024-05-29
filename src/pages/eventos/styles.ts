import { styled } from '@/styles/stitches.config';
import Image from 'next/image';

export const PreviousEditionsContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  marginTop: '9rem',
});

export const PreviousEditionsContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '2rem',

  // border: '1px solid orange',
});

export const PreviousEditionsContentTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',

  marginTop: '0.5rem',
});

export const PreviousEditionsDivContainer = styled('div', {
  width: '100%',
  display: 'flex',

  justifyContent: 'center',

  padding: '0 2.75rem 1rem 2.75rem',
  gap: '0.75rem',

  // border: '1px solid green',
});

export const PreviousEditionsGridContent = styled('div', {
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(5, auto)',

  gap: '1.5rem',

  // border: '1px solid red',
});

export const PreviousEditionsContentDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '0.5rem',

  borderRadius: '0.25rem',

  border: '1px solid $gray300',
});

export const PreviousEditionsLogoContentImage = styled(Image, {
  width: '14.5rem',
  height: '12.5rem',

  borderRadius: '0.25rem',
});
