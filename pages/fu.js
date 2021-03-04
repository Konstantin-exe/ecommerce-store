/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { thankYouPage, thankYouImg } from '../styles/styles';
import Layout from '../components/Layout';

export default function Fu() {
  return (
    <>
      <Head>
        <title>Universe Store</title>
      </Head>

      <Link href="/">
        <img src="../../img/fu.png" alt="fu" />
      </Link>
    </>
  );
}
