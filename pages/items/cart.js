import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import styles, { backToStoreButton, singleItemPage } from '../../styles/styles';
import { useEffect, useState, useReducer } from 'react';

export default function Cart(props) {
  const [itemInfo, setItemInfo] = useState(props.productsInfo);
  const [amount, setAmount] = useState(props.productsInfo.amount);
  // console.log(props.cartCookie);

  function handleTotal() {
    let totalSum = 0;
    for (let i = 0; i < props.productsInfo.length; i++) {
      totalSum += props.productsInfo[i].price * props.productsInfo[i].amount;
    }
    return totalSum;
  }

  // const initialState =

  // const reducer = (state, action) => {
  //   switch (action) {
  //     case 'INCREMENT':
  //       return state + 1;
  //     case 'DECREMENT':
  //       return state - 1;
  //     default:
  //       throw new Error();
  //   }
  // };

  // const Counter = () => {
  //   const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <Layout>
      <Head>
        <title>Show me your Cart</title>
      </Head>
      <h1>Cart</h1>
      <div>
        {itemInfo.map((cartItem) => (
          <div key={cartItem.id}>
            <img src={cartItem.imgUrl} alt={cartItem.name} />
            <p>{cartItem.itemName}</p>
            <p>{cartItem.amount}</p>
            <button
              onClick={() => {
                increaseAmount();
              }}
            >
              +
            </button>
            <button>-</button>
            <p>price: {cartItem.price}</p>
            <p>sum: {cartItem.amount * cartItem.price}</p>
            <button>DELETE</button>
            <br />
          </div>
        ))}
      </div>
      <div key={Math.round}>
        <p>Total: {handleTotal()}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getItemInfo } = await import('../../utils/database');
  const { getItemById } = await import('../../utils/database');
  const id = Number(context.query.shopItemId);

  const itemInfos = await getItemInfo();
  const itemInfo = itemInfos.find((entry) => entry.id === id);

  const cookiesFromRequest = context.req.cookies.cart;
  const cookiesParsed = cookiesFromRequest
    ? JSON.parse(cookiesFromRequest)
    : [];

  const productsInfo = cookiesParsed.map((cookieItem) => {
    const itemFromDatabase = itemInfos.find(
      (product) => product.id === cookieItem.id,
    );
    itemFromDatabase.amount = cookieItem.quantity;
    return itemFromDatabase;
  });
  // console.log(productsInfo);

  return {
    props: {
      itemInfo: itemInfo || null,
      productsInfo: productsInfo,
    },
  };
}
