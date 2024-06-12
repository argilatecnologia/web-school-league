import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';

import { globalStyles } from '@/styles/global';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.ligaescolarcaruaru.com.br/',
          siteName: 'Liga Escolar',
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
