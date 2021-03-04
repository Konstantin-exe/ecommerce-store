/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { thankYouPage, thankYouImg } from '../styles/styles';
import Layout from '../components/Layout';

export default function thankYou() {
  return (
    <Layout>
      <Head>
        <title>Universe Store</title>
      </Head>
      <h1 css={thankYouPage}>THANK YOU EARTHLING</h1>
      <Link href="/">
        <img css={thankYouImg} src="../../img/Courier_Flap.png" alt="head" />
      </Link>
      <h2>Your wares are on its way</h2>
    </Layout>
  );
}
