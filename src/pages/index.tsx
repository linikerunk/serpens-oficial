import {
  ContactUs,
  Hero,
  Portfolio,
  Services,
  ButtonWhatsapp,
} from '../components'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import NosSection from '../components/Section/nos'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agência Serpens | Soluções digitais </title>
      </Head>
      <Hero />
      <Container>
      <Services />
      <Portfolio />
    
      <NosSection />
      <ContactUs />
      <ButtonWhatsapp />
      </Container>
    </>
  )
}

export default Home
