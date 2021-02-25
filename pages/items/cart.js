import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import styles, { backToStoreButton, singleItemPage } from '../../styles/styles';
import { useEffect, useState } from 'react';
import { getItemInfo } from '../../utils/database';

export default function Cart(props) {
  const [total, setTotal] = useState(0);
  console.log(props.cartCookie);

  // function totalCosts() {
  //   props.cartCookie.map((cartItem) => {
  //     const prevCartItem = [...cartItem];
  //     console.log(prevCartItem);
  //     const sumValue = prevCartItem.sum + cartItem.sum;
  //     return sumValue;
  //   });
  // }

  function handleTotal() {
    let totalSum = 0;
    for (let i = 0; i < props.cartCookie.length; i++) {
      totalSum = props.cartCookie[i].price * props.cartCookie.quantity;
    }
    setTotal(totalSum);
  }
  console.log(handleTotal());
  // const cartTotal = props.cartCookie.reduce(
  //   (total, { price = 0 }, { quantity = 0 }) => total + price * quantity,
  //   0,
  // );

  return (
    <Layout>
      <Head>
        <title>Show me your Cart</title>
      </Head>
      <h1>Cart</h1>
      <div>
        {props.cartCookie.map((cartItem) => (
          <div key={cartItem.id}>
            <img src={cartItem.imgUrl} alt={cartItem.name} />
            <p>{cartItem.name}</p>
            <p>{cartItem.quantity}</p>
            <button>+</button>
            <button>-</button>
            <p>price: {cartItem.price}</p>
            <p>sum: {cartItem.sum}</p>
          </div>
        ))}
      </div>
      <div key={Math.round}>{/* <p>{handleTotal()}</p> */}</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = Number(context.query.shopItemId);

  const itemInfos = await getItemInfo();
  const itemInfo = itemInfos.find((entry) => entry.id === id);

  const cart = context.req.cookies.cart;
  const cartCookie = cart ? JSON.parse(cart) : 0;

  return {
    props: {
      itemInfo: itemInfo || null,
      cartCookie: cartCookie,
    },
  };
}
