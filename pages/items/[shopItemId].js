import Head from 'next/head';
import Layout from '../components/Layout';
import { getItemInfo } from '../../utils/database';

export default function ShopItem(props) {
  return (
    <Layout>
      <Head>
        <title>{props.shopItem.itemName}</title>
      </Head>
      <h1>{props.shopItem.itemName}</h1>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getItemInfo } = await import('../../utils/database');

  const id = context.query.shopItemId;

  const itemInfo = getItemInfo();
  const shopItem = itemInfo.find((si) => si.id === id);

  return {
    props: {
      shopItem: shopItem,
    },
  };
}
