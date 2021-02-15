import Head from 'next/head';
import Layout from '../components/Layout';
import { getItemInfo } from '../database';

export default function ShopItem(props) {
  return (
    <Layout>
      <Head>
        <title>{props.itemInfo.itemName}</title>
      </Head>
      <h1>{props.itemInfo.itemName}</h1>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getItemInfo } = await import('../database');

  const id = context.query.shopItemId;

  const itemInfo = getItemInfo();
  const shopItem = itemInfo.find((si) => si.id === id);

  return {
    props: {
      itemInfo: itemInfo,
    },
  };
}
