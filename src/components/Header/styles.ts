import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const HeaderContainer = styled('header', {
  width: '100vw',
  height: '85px',

  maxWidth: 1370,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  margin: '0 auto',
  marginTop: '2.5rem',
});

export const HeaderContent = styled('div', {
  width: '1366px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  borderBottomWidth: '1px',
  borderBottomColor: '$gray200',
  borderBottomStyle: 'solid',
});

export const HeaderContentImage = styled(Image, {
  width: '140px',
  height: '90px',
});
