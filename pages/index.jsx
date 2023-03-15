
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {/* Header */}
      {/* Banner */}
      <Banner/>

      <main>
        
      </main>
      
    </div>
  )
}

export default Home
