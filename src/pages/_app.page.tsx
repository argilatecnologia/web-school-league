import { globalStyles } from '@/styles/global';

import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.ignit-call.com.br/',
          siteName: 'Liga Escolar',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
