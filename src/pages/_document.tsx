import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Poppins:wght@200;400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/Snowman.svg" type="image/svg+xml" />
        <script data-goatcounter="https://shayna.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
