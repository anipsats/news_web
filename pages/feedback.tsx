import { NextPage } from 'next';
import Head from 'next/head';
import Feedback from '../components/home/Feedback';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

const FeedbackPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Newsta</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="relative overflow-y-auto w-full h-full">
        <Feedback />
        <div className="relative sm:fixed bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FeedbackPage;
