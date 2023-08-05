// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '@/theme/config';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico?" />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}