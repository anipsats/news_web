import { NextPage } from 'next';
import Head from 'next/head';
import PrivacyPolicy from '../components/home/PrivacyPolicy';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Newsta</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="relative overflow-hidden">
        <PrivacyPolicy />
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
