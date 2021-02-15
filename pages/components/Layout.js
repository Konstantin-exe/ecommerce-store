import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          padding: 9,
          border: '1px solid #ddd',
          backgroundColor: '#FF00FF',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginLeft: 'auto',
            maxWidth: 200,
          }}
        >
          <Link href="/">
            <a>
              <img src="img/head.png" alt="head" width={40} height={40} />
            </a>
          </Link>
          <Link href="/items">
            <a>Store</a>
          </Link>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </nav>
      </header>
      <a style={{ position: 'fixed', zIndex: -2 }}>
        <img src="img/page-background.png" alt="" height={700} width={1000} />
      </a>
      {props.children}
      <footer>footer</footer>
    </>
  );
}
