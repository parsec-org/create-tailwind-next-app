import { Html, Head, Main, NextScript } from 'next/document';
import { NEXT_DATA } from 'next/dist/shared/lib/utils';

export default function Document({ locale }: NEXT_DATA) {
  console.log('props', locale);
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
