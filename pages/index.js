import Head from 'next/head'
import { Header, Nav } from '../components'
import { Results } from '../components/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      <Results/>
    </div>
  )
}

export async function getServerSideProp(context) {
  const genre = context.query.genre;

  
}