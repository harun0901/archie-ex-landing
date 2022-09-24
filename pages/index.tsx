import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../components/Logo'
import { networks } from '../data'
import Network from '../components/Network'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <Head>
        <title>Archie Exchange</title>
        <meta name="description" content="Archie multichain decentralized exchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full container mx-auto">
        <main className="h-full flex flex-col">
          <nav className="flex justify-between items-center p-3 h-20">
            <Logo />
            <a className="bg-orange-400 text-neutral-50 font-medium cursor-pointer px-3 py-2 rounded " href="https://app.archieexchange.com/dex">Open App</a>
          </nav>
          <div className="mt-4 md:mt-10">
            <p className="text-4xl text-center text-white">Archie Multi-chain
DEX Aggregator</p>
            <p className="text-3xl text-center text-white mt-5">Swap 10,000+ assets between all chains</p>
            <p className="text-3xl text-center text-white">ETH, BSC, Avax, Polygon, +14 more</p>
          </div>
          <div className="grow flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {networks.map((network, i) => <Network network={network} key={i}/>)}
            </div>
          </div>
        </main>

        <footer>
        </footer>
      </div>
    </div>
  )
}

export default Home
