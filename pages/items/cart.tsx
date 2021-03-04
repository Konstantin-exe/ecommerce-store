/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Layout from '../../components/Layout';
import Cookies from 'js-cookie';
import {
  cartSum,
  cartItemLayout,
  cartItemLayoutSingle,
} from '../../styles/styles';
import { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import CheckoutForm from '../../components/CheckoutForm';

type AllProductsFromServer = {
  id: number;
  itemName: string;
  price: number;
  amount: number;
  quantity: number;
  imgUrl: string;
  shortDescription: string;
  longDescription: string;
};

export type AllProductsFromCart = {
  id: number;
  amount: number;
};

type Props = {
  productsInfo: AllProductsFromServer[];
};

export default function Cart(props: Props) {
  // const [itemInfo, setItemInfo] = useState(props.productsInfo);
  const [stock, setStock] = useState(props.productsInfo);

  function handleTotal() {
    let totalSum = 0;
    for (let i = 0; i < props.productsInfo.length; i++) {
      totalSum += props.productsInfo[i].price * props.productsInfo[i].amount;
    }
    return totalSum;
  }

  const increaseQuantity = (index: number) => {
    const currentItems = [...stock];
    currentItems[index].amount += 1;
    setStock(currentItems);
  };

  const decreaseQuantity = (index: number) => {
    const currentItems = [...stock];

    if (currentItems[index].amount > 1) {
      currentItems[index].amount -= 1;
      setStock(currentItems);
    }
  };

  const deleteItem = (arr: AllProductsFromServer[], index: number) => {
    const currentItems = [...stock];

    const currentItemFiltered = currentItems.filter(function (
      cartItemIndex,
      currentItemIndex,
    ) {
      const newCart = currentItemIndex !== index;
      return newCart;
    });
    setStock(currentItemFiltered);
    Cookies.set('cart', currentItemFiltered);
  };
  useEffect(() => {}, [stock]);

  return (
    <Layout>
      <Head>
        <title>Show me your Cart</title>
      </Head>
      <h1>Cart</h1>
      <div>
        <div css={cartItemLayout}>
          {stock.map((cartItem, i) => (
            <div css={cartItemLayoutSingle} key={cartItem.id}>
              <img src={cartItem.imgUrl} alt={cartItem.itemName} />
              <p>{cartItem.itemName}</p>
              <p>Quantity: {cartItem.amount}</p>
              <button
                data-cy="increaseQuantity"
                onClick={() => {
                  increaseQuantity(i);
                }}
              >
                +
              </button>
              <button
                data-cy="decreaseQuantity"
                onClick={() => {
                  decreaseQuantity(i);
                }}
              >
                -
              </button>
              <p>price: {cartItem.price}SMH</p>
              <p>sum: {cartItem.amount * cartItem.price}</p>
              <button
                data-cy="deleteItem"
                onClick={() => {
                  deleteItem(stock, i);
                }}
              >
                Delete Item
              </button>
              <br />
            </div>
          ))}
          <div css={cartSum} key={Math.random()}>
            <h2>Total: {handleTotal()}</h2>
          </div>
          <CheckoutForm />
          <br />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log('context', context);
  const { getItemInfo } = await import('../../utils/database');

  const id = Number(context.query.shopItemId);

  const itemInfos = await getItemInfo();
  const itemInfo = itemInfos.find(
    (entry: AllProductsFromServer) => entry.id === id,
  );

  const cookiesFromRequest = context.req.cookies.cart;
  const cookiesParsed = cookiesFromRequest
    ? JSON.parse(cookiesFromRequest)
    : [];

  const productsInfo = cookiesParsed.map(
    (cookieItem: AllProductsFromServer) => {
      const itemFromDatabase = itemInfos.find(
        (product: AllProductsFromServer) => product.id === cookieItem.id,
      );
      itemFromDatabase.amount = cookieItem.quantity;
      return itemFromDatabase;
    },
  );

  return {
    props: {
      itemInfo: itemInfo || null,
      productsInfo: productsInfo,
    },
  };
}
