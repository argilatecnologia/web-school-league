import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const HeaderContainer = styled('header', {
  width: '100%',
  height: '8rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  // position: 'fixed',
  // top: 0,
  // left: 0,
  // zIndex: 100,
  background: '$white25',

  // border: '1px solid red',
});

export const HeaderContent = styled('div', {
  width: '100%',
  height: '8rem',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderBottomWidth: '1px',
  borderBottomColor: '$gray200',
  borderBottomStyle: 'solid',

  padding: '0 2.5rem',

  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',

  svg: {
    position: 'absolute',
    top: '3.5rem',
    right: '3rem',
  },

  // border: '1px solid blue',
});

export const HeaderContentImage = styled(Image, {
  width: '7.75rem',
  height: '5.625rem',

  marginTop: '1.5rem',
});
