import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getItemInfo } from '../../utils/database';
import {
  storeItemList,
  storeItemListSingle,
  storeItemListCard,
} from '../../styles/styles';

const itemInfo = getItemInfo();

export default function Store(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Show me your Store</title>
      </Head>
      <h1>Store</h1>
      <h2>This will become the Store Page</h2>
      <div css={storeItemList}>
        {props.itemInfo.map((item) => (
          <div css={storeItemListSingle} key={item.id}>
            <img src={item.imgUrl} alt={item.itemName} />
            <h4>{item.itemName} </h4>
            <p>{item.shortDescription}</p>
            <Link href={`/items/${item.id}`}>
              <a>Get more Info</a>
            </Link>
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
