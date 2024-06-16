import { keyframes, styled } from '@/styles/stitches.config';

export const LoadingSpinnerContainer = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const spinnerKeyframe = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const LoadingSpinnerContent = styled('div', {
  width: '100%',

  border: '2px solid $white',
  borderTop: '2px solid $orange600',
  borderRadius: '50%',

  animation: `${spinnerKeyframe} 1.5s linear infinite`,

  variants: {
    size: {
      small: {
        width: '20px',
        height: '20px',
      },

      medium: {
        width: '32px',
        height: '32px',
      },

      big: {
        width: '60px',
        height: '60px',
      },
    },
  },

  defaultVariants: {
    size: 'big',
  },
});
