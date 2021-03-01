import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { navBar, navLinks, cartImg } from '../../styles/styles';
import { useEffect } from 'react';

export default function Layout(props) {
  const showCookieLength = Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart')).length
    : 0;

  useEffect(() => {}, [props.cart]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{}}>
        <nav css={navBar}>
          <div>
            <Link href="/">
              <a>
                <img src="/img/head.png" alt="head" width={40} height={40} />
              </a>
            </Link>
          </div>

          <div css={navLinks}>
            <Link href="/items">
              <a>Store</a>
            </Link>
            <p> {showCookieLength} </p>

            <Link href="/items/cart">
              <img
                src="/img/Courier_Flap.png"
                alt="cart"
                width={30}
                height={30}
                css={cartImg}
              />
            </Link>
          </div>
        </nav>
      </header>
      {props.children}
      <footer>footer</footer>
    </>
  );
}
