import { styled } from '@/styles/stitches.config';

import { Heading, Text } from '@/components/Typography';

export const CalendarContainer = styled('section', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const CalendarContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '0 auto',
  padding: '3rem 3.5rem 2rem 3rem',

  minHeight: 'calc(100vh - 10.625rem)',
});

export const CalendarContentTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',

  marginBottom: '1.5rem',
});

export const CalendarContainerInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '2.5rem',

  border: '1px solid blue',

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '100%',

    // padding: '0 1rem 0 1rem',

    border: '1px solid red',
  },
});

export const CalendarContentInformations = styled('div', {
  // width: '78.5rem',

  display: 'flex',
  flexDirection: 'column',

  gap: '1.5rem',

  border: '1px solid violet',
});

export const CalendarMonthTitle = styled('div', {
  display: 'flex',
});

export const CalendarDetailsInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '1rem',

  /* Media Queries min-width: 640px */
  // '@media(min-width: 640px)': {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(2, 1fr)',
  // },

  /* Media Queries min-width: 768px */
  // '@media(min-width: 768px)': {
  //   display: 'grid',
  //   gridTemplateColumns: 'repeat(2, 1fr)',
  // },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    flexDirection: 'column',
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    flexDirection: 'column',

    paddingLeft: '2rem',
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    flexDirection: 'column',

    margin: '0 auto',
  },
});

export const CalendarDetails = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  alignItems: 'center',
  justifyContent: 'center',

  gap: '1rem',

  borderRadius: '0.25rem',
  border: '0.5px solid rgba(242, 242, 242)',

  '-webkit-box-shadow': '0px 1px 1px #515151',
  '-moz-box-shadow': '0px 1px 1px #515151',
  boxShadow: '0px 2px 12px rgba(51, 51, 51, 0.3)',

  /* Media Queries min-width: 640px */
  '@media(min-width: 640px)': {
    // display: 'grid',
    // gridTemplateRows: 'repeat(2, 1fr)',
    // textAlign: 'center',
    // [`${Heading}`]: {
    //   paddingTop: '1rem',
    //   fontSize: '$xl',
    // },
    // [`${Text}`]: {
    //   paddingBottom: '1rem',
    //   fontSize: '$lg',
    // },
  },

  /* Media Queries min-width: 768px */
  '@media(min-width: 768px)': {
    // display: 'grid',
    // gridTemplateRows: 'repeat(2, 1fr)',
    // textAlign: 'center',
    // [`${Heading}`]: {
    //   paddingTop: '1rem',
    //   fontSize: '$xl',
    // },
    // [`${Text}`]: {
    //   paddingBottom: '1rem',
    //   fontSize: '$lg',
    // },
  },

  /* Media Queries min-width: 1024px */
  '@media(min-width: 1024px)': {
    // width: '100%',
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },

  /* Media Queries min-width: 1280px */
  '@media(min-width: 1280px)': {
    width: '70rem',
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },

  /* Media Queries min-width: 1536px */
  '@media(min-width: 1536px)': {
    width: '78.5rem',
    height: '5rem',

    [`${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$lg',
      paddingRight: '1rem',
    },
  },
});

export const CalendarDivider = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  width: '1rem',
  height: '1.25rem',

  borderLeft: '2px solid $gray700',

  // /* Media Queries min-width: 640px */
  // '@media(min-width: 640px)': {
  //   padding: '0.125rem',

  //   width: '18rem',
  //   height: '14rem',
  // },

  // /* Media Queries min-width: 768px */
  // '@media(min-width: 768px)': {
  //   padding: '0.125rem',

  //   width: '18rem',
  //   height: '14rem',
  // },

  // /* Media Queries min-width: 1024px */
  // '@media(min-width: 1024px)': {
  //   padding: '0.125rem',

  //   width: '18rem',
  //   height: '14rem',
  // },

  // /* Media Queries min-width: 1280px */
  // '@media(min-width: 1280px)': {
  //   padding: '0.125rem',

  //   width: '16.5rem',
  //   height: '14rem',
  // },

  // /* Media Queries min-width: 1536px */
  // '@media(min-width: 1536px)': {
  //   padding: '0.125rem',

  //   width: '16rem',
  //   height: '14rem',
  // },
});
