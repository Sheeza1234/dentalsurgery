// pages/_app.tsx
import type { AppProps } from 'next/app';
import Script from 'next/script';
import '../app/globals.css'; // Adjust path if needed

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Tag Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11323292298"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11323292298');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
