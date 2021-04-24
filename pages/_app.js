import { Container, CssBaseline } from '@material-ui/core';
import Head from 'next/head';
import Navigation from '../components/navigation';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#23ce6b',
    },
    secondary: {
      main: '#e23',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nebojsa Adamovic</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth className="container">
          <Navigation />
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
