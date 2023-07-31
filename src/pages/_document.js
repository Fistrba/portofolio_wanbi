import { Html, Head, Main, NextScript } from 'next/document'
import { useDark } from 'src/context/DarkContext'

export default function Document() {



  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&family=Raleway:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=1"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
