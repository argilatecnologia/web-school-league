import { styled } from '@/styles/stitches.config';

import Image from 'next/image';

export const HeaderContainer = styled('header', {
  width: '1366px',
  height: '72px',

  maxWidth: 1480,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  margin: '0 auto',
  marginTop: '2.5rem',

  border: '1px $white solid',
});

export const HeaderContent = styled('div', {
  width: '60',
});

export const HeaderContentImage = styled(Image, {
  width: '120px',
  height: '75px',
});
