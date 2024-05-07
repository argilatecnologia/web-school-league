import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const HeaderContainer = styled('header', {
  width: '1366px',
  height: '85px',

  maxWidth: 1280,

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
  borderBottomColor: `linear-gradient(180deg, #FFC887 0%, #e96924 100%)`,
  borderBottomStyle: 'solid',
});

export const HeaderContentImage = styled(Image, {
  width: '140px',
  height: '90px',
});

export const Divider = styled('div', {});
