import Head from 'next/head';
import Layout from './components/Layout';

export default function Store() {
  return (
    <Layout>
      <Head>
        <title>Show me your Store</title>
      </Head>
      <h1>Store</h1>
      <p>This will become the Store Page</p>
    </Layout>
  );
}
