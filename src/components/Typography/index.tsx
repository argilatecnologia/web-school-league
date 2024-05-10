import { styled } from '@/styles/stitches.config';

export const Text = styled('p', {
  lineHeight: '$base',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$xl',
      },
    },

    color: {
      'gray-100': {
        color: '$gray100',
      },
      'gray-200': {
        color: '$gray200',
      },
      'gray-300': {
        color: '$gray300',
      },
      'gray-400': {
        color: '$gray400',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'gray-100',
  },
});

export const Heading = styled('h1', {
  fontWeight: '$bold',
  lineHeight: '$short',

  variants: {
    size: {
      xs: {
        fontSize: '$md',
      },
      sm: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$xl',
      },
      lg: {
        fontSize: '$2xl',
      },
    },

    color: {
      'gray-100': {
        color: '$gray100',
      },
      'gray-200': {
        color: '$gray200',
      },
      'gray-300': {
        color: '$gray300',
      },
      'gray-400': {
        color: '$gray400',
      },
      'gray-500': {
        color: '$gray500',
      },
      'gray-600': {
        color: '$gray600',
      },
      'gray-700': {
        color: '$gray700',
      },
      'gray-800': {
        color: '$gray800',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'gray-100',
  },
});
