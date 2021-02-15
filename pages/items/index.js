import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getItemInfo } from '../../utils/database';

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
      <div className="Store_Items">
        {props.itemInfo.map((item) => (
          <div key={item.id}>
            <img src={item.imgUrl} alt={item.itemName} />
            {item.itemName} {item.shortDescription}
            <Link href={`/items/${item.id}`}>
              <a>Get more Info</a>
            </Link>
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
