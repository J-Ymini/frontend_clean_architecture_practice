import Header from '@/components/Header';
import { Provider } from '@/services/context/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <Header />
        <div className="py-20 px-5">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
