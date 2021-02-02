import Head from 'next/head';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Workcard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>hello.</p>
      </main>

      <Footer />
    </div>
  )
}
