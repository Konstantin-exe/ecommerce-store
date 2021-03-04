/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { homeHead, homeHeading } from '../styles/styles';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Universe Store</title>
      </Head>
      <h1 css={homeHeading}>SHOW ME WHAT YOU GOT</h1>
      <Link href={`/items`}>
        <img css={homeHead} src="/favicon.ico" alt="head" data-cy="homeHead" />
      </Link>
    </Layout>
  );
}
