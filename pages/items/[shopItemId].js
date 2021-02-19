/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
// import { getShopItems } from '../../utils/database';
import styles, {
  backToStoreButton,
  singleItemPage,
  singleItemPageBuyField,
} from '../../styles/styles';

export default function ShopItem(props) {
  return (
    <Layout>
      <Head>
        <title>{props.shopItem.itemName}</title>
      </Head>
      <h1>{props.shopItem.itemName}</h1>
      <Link href={`/items`}>
        <button css={backToStoreButton} href={`/items`}>
          Back to store
        </button>
      </Link>
      <div css={singleItemPage}>
        <img src={props.shopItem.imgUrl} alt={props.shopItem.itemName} />
        <div css={singleItemPageBuyField}>
          <a>{props.shopItem.price} SMH</a>
          <br />
          <a>Free delivery within Dimension C-137</a>
          <button>Add Item To Cart</button>
        </div>
        <p>{props.shopItem.longDescription}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPath() {
  const { getItemById } = await import('../../utils/database');
  const itemInfo = await getItemById();

  return {
    props: {
      itemInfo: itemInfo,
    },
  };
}
