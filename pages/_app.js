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
  const [isOpen, setIsOpen] = useState(true);

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
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" className="container">
          <Navigation />
          {/* <Sidebar props={(isOpen, toggleSidebar)} /> */}
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
