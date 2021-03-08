/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { storeItemList, storeItemListSingle } from '../../styles/styles';

type AllProductsFromServer = {
  id: number;
  itemName: string;
  price: number;
  quantity: number;
  imgUrl: string;
  shortDescription: string;
  longDescription: string;
};

type Props = { itemInfos: AllProductsFromServer[] };

export default function Store(props: Props) {
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
        {props.itemInfos.map((item) => (
          <div css={storeItemListSingle} key={item.id}>
            <Link href={`/items/${item.id}`}>
              <img src={item.imgUrl} alt={item.itemName} data-cy="shopItem" />
            </Link>
            <h4>{item.itemName} </h4>
            <p>{item.shortDescription}</p>
            <div>
              <p>In Stock: {item.quantity}</p>
              <p>price: {item.price} SHM</p>
            </div>
            <div key={Math.random()} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { getItemInfo } = await import('../../utils/database');
  const itemsFromServer = await getItemInfo();
  const itemInfos = itemsFromServer.slice(0, 9);

  return {
    props: {
      itemInfos: itemInfos,
    },
  };
}
