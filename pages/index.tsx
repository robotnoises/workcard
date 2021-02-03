import Head from 'next/head';
import Footer from '@components/Footer';
import Card from '@components/Card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient">
      <Head>
        <title>Workcard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        <Card />
      </main>

      <Footer />
    </div>
  )
}
