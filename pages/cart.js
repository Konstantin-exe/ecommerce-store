import Head from 'next/head';
import Layout from './components/Layout';

export default function Cart() {
  return (
    <Layout>
      <Head>
        <title>Show me your Cart</title>
      </Head>
      <h1>Cart</h1>
      <p>This will become the Cart</p>
    </Layout>
  );
}
