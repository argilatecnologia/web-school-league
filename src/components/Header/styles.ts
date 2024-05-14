import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const HeaderContainer = styled('header', {
  width: '100%',
  // height: '6rem',

  // maxWidth: 1370,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  background: '$white25',

  // border: '1px solid red',
});

export const HeaderContent = styled('div', {
  width: '100vw',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderBottomWidth: '1px',
  borderBottomColor: '$gray200',
  borderBottomStyle: 'solid',

  padding: '0 2.5rem',
});

export const HeaderContentImage = styled(Image, {
  width: '7.75rem',
  height: '5.625rem',

  paddingTop: '1rem',
});
