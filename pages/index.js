import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Universe Store</title>
      </Head>
      <h1>SHOW ME WHAT YOU GOT</h1>
    </Layout>
  );
}
