/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles, {
  backToStoreButton,
  singleItemPage,
  singleItemPageBuyField,
} from '../../styles/styles';
import { getItemInfo } from '../../utils/database';
import { useState } from 'react';
import Cart from './cart';

export default function ShopItem(props) {
  const [quantity, setQuantity] = useState(1);
  console.log(props);

  function stackingMatchingItems(id, product) {
    const newCart = [
      {
        name: product.itemName,
        quantity: quantity,
        id: product.id,
        price: product.price,
      },
    ];
    return props.cart.reduce(function (acc, cartItem) {
      if (cartItem.id === id) {
        const newQuantity = cartItem.quantity + quantity;
        return { ...cartItem, quantity: newQuantity };
        // } else {
        // return { ...newCart };
      }
    }, newCart);
  }

  // let newCart = [
  //   ...props.cart,
  //   {
  //     name: product.itemName,
  //     quantity: quantity,
  //     id: product.id,
  //     price: product.price,
  //   },
  // ];
  //   return newCart.map((cartItem) => {
  //     if (cartItem.id === id) {
  //       let newQuantity = cartItem.quantity + quantity;
  //       return { ...cartItem, quantity: newQuantity };
  //     } else {
  //       return { ...cartItem };
  //     }
  //   });
  //   .reduce((acc, cartItem) => {
  //   todo: return accom. with item of the biggest quantity.
  //   return acc;
  //   }
  //   );

  return (
    <Layout>
      <Head>
        <title>{props.itemInfo.itemName}</title>
      </Head>
      <h1>{props.itemInfo.itemName}</h1>
      <Link href={`/items`}>
        <button css={backToStoreButton} href={`/items`}>
          Back to store
        </button>
      </Link>
      <div css={singleItemPage}>
        <img src={props.itemInfo.imgUrl} alt={props.itemInfo.itemName} />
        <div css={singleItemPageBuyField}>
          <a>{props.itemInfo.price} SMH</a>
          <br />
          <a>Free delivery within Dimension C-137</a>
          <br />
          <br />
          <span>Quantity: </span>
          <select
            onChange={(e) => {
              setQuantity(parseInt(e.target.value, 10));
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          <br />
          <br />
          <span>Sum: {props.itemInfo.price * quantity} SMH</span>
          <button
            onClick={() => {
              props.setCart(
                stackingMatchingItems(props.itemInfo.id, props.itemInfo),
              );
            }}
          >
            Add Item(s) To Cart
          </button>
        </div>
        <p>{props.itemInfo.longDescription}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = Number(context.query.shopItemId);

  const itemInfos = await getItemInfo();
  const itemInfo = itemInfos.find((entry) => entry.id === id);

  return {
    props: {
      itemInfo: itemInfo || null,
    },
  };
}
