/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getItemInfo } from '../../utils/database';
import {
  storeItemList,
  storeItemListSingle,
  storeItemListCard,
  storeItemListInfo,
  storeItemListInfoImg,
} from '../../styles/styles';

const itemInfo = getItemInfo();

export default function Store(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Show me your Store</title>
      </Head>
      <h2>
        Nobody exists on purpose, nobody belongs anywhere, everybodys gonna
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
              {/* <img src="../img/smh.png" alt="Schmekls" /> */}
            </div>
            <div css={storeItemListCard} key={Math.random()} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { getItemInfo } = await import('../../utils/database');

  const itemInfo = getItemInfo();
  console.log('i', itemInfo);

  return {
    props: {
      itemInfo: itemInfo,
    },
  };
}
