import { AppWrapper } from '../context/state';
import { Container, CssBaseline } from '@material-ui/core';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#030303',
    },
    secondary: {
      main: '#fafafa',
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        ></link>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Container maxWidth="false" className="container">
            <Navigation toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Component {...pageProps} />
          </Container>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
