import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Navbar, Footer } from '../components'
import { GlobalStyle } from '../styles/global'
import theme from '../styles/theme'
import { Container } from '../components/Container'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
   
          <Navbar />
          <Component {...pageProps} />
          {/* <Footer /> */}

        <GlobalStyle />
      </ThemeProvider>
  )
}

export default MyApp
