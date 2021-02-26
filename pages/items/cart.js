import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import styles, { backToStoreButton, singleItemPage } from '../../styles/styles';
import { useEffect, useState, useReducer } from 'react';
import { networkInterfaces } from 'os';

export default function Cart(props) {
  const [itemInfo, setItemInfo] = useState(props.productsInfo);
  const [stock, setStock] = useState(props.productsInfo);

  function handleTotal() {
    let totalSum = 0;
    for (let i = 0; i < props.productsInfo.length; i++) {
      totalSum += props.productsInfo[i].price * props.productsInfo[i].amount;
    }
    return totalSum;
  }

  const increaseQuantity = (index) => {
    const currentItems = [...stock];
    currentItems[index].amount += 1;
    setStock(currentItems);
  };

  const decreaseQuantity = (index) => {
    const currentItems = [...stock];

    if (currentItems[index].amount > 1) {
      currentItems[index].amount -= 1;
      setStock(currentItems);
    }
  };

  const deleteItem = (index) => {
    const currentItems = [...stock];
    Cookies.remove(currentItems[index]);
  };

  return (
    <Layout>
      <Head>
        <title>Show me your Cart</title>
      </Head>
      <h1>Cart</h1>
      <div>
        {itemInfo.map((cartItem, i) => (
          <div key={cartItem.id}>
            <img src={cartItem.imgUrl} alt={cartItem.name} />
            <p>{cartItem.itemName}</p>
            <p>{cartItem.amount}</p>
            <button
              onClick={() => {
                increaseQuantity(i);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                decreaseQuantity(i);
              }}
            >
              -
            </button>
            <p>price: {cartItem.price}</p>
            <p>sum: {cartItem.amount * cartItem.price}</p>
            <button
              onClick={() => {
                deleteItem(i);
              }}
            >
              DELETE
            </button>
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
