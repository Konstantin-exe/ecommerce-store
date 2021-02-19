/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  storeItemList,
  storeItemListSingle,
  storeItemListCard,
  storeItemListInfo,
} from '../../styles/styles';
// import { getShopItems } from '../../utils/database';

export default function Store(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Show me your Store</title>
      </Head>
      <h2>
        Nobody exists on purpose, nobody belongs anywhere, everybody's gonna
        die... <br /> Go buy some stuff!
      </h2>
      <div css={storeItemList}>
        {props.itemInfo.map((item) => (
          <div css={storeItemListSingle} key={item.id}>
            <Link href={`/items/${item.id}`}>
              <img src={item.imgUrl} alt={item.itemName} />
            </Link>
            <h4>{item.itemName} </h4>
            <p>{item.shortDescription}</p>
            <div css={storeItemListInfo}>
              <p>In Stock: {item.quantity}</p>
              <p>price: {item.price} SHM</p>
            </div>
            <div css={storeItemListCard} key={Math.random()} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { getItemInfo } = await import('../../utils/database');
  const itemInfo = await getItemInfo();

  return {
    props: {
      itemInfo: itemInfo,
    },
  };
}
