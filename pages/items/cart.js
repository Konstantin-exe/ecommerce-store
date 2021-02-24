import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import styles, { backToStoreButton, singleItemPage } from '../../styles/styles';
import { useEffect, useState } from 'react';
import { getItemInfo } from '../../utils/database';

export default function Cart(props) {
  console.log(props.cartCookie);

  // map over cookies, every item needs to build div(see below)

  return (
    <Layout>
      <Head>
        <title>Show me your Cart</title>
      </Head>
      <h1>Cart</h1>
      <div>
        <div>
          <img />
          <p>Name: {Cookies.get(props.cart.name)}</p>
          <p>quantity {props.cartCookie.quantity}</p>
          <button>+</button>
          <button>-</button>
          <p>single item price</p>
        </div>
        <p>total: </p>
      </div>
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
