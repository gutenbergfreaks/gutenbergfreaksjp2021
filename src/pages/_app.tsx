import 'faust.config';
import { HeadlessProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React, { useEffect } from 'react';
import 'scss/main.scss';
import { client } from 'client';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-NF2RJV9'
}

export default function MyApp({ Component, pageProps }: AppProps) {
  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  },[]);
  return (
    <>
      <HeadlessProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </HeadlessProvider>
    </>
  );
}
