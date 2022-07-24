import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { GlobalStyles, theme } from 'styles/global';
import 'styles/receiver.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>    
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
