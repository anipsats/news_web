import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Blog from '../components/home/Blog';
import Footer from '../components/layout/Footer';
import WhyChoose from '../components/home/WhyChoose';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Newsta</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <WhyChoose />
      </div>
      <Footer />
    </>
  );
};

export default Home;
