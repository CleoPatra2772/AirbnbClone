
import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { LargeCard } from '../components/LargeCard'
import { MediumCard } from '../components/MediumCard'
import { SmallCard } from '../components/SmallCard'
import { Footer } from '../components/Footer'

const Home = ({exploreData, cardsData}) => {
  
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

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img, distance, location}) => (
            <SmallCard 
            key={img}
            img = {img} 
            distance = {distance} 
            location = {location}/>
          ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {cardsData?.map(({img, title}) => (
            <MediumCard 
              key={img}
              img= {img}
              title={title}
            />
          ) )}
          </div>
        </section>

        <LargeCard 
          img="http://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description='Wishlists curated by Airbnb.'
          buttonText = "Get Inspired"
        />
    
      </main>
      
      <Footer />
    </div>
  )
}

export default Home;


export async function getStaticProps(){
  const exploreData = await fetch('https://api.npoint.io/f659feeadfe10d9d6c59').then(res => res.json());


  const cardsData = await fetch('https://api.npoint.io/65e3ba07ff24fd4e9d99').then(res => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
