import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { navBar, navLinks } from '../../styles/styles';

export default function Layout(props) {
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
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </div>
        </nav>
      </header>
      {/* <a>
        <img
          src="/img/page-background.png"
          alt=""
          height={1000}
          width={1000}
          style={{
            position: 'fixed',
            zIndex: -2,
            backgroundPosition: 'center',
            backgroundSize: 'center',
          }}
        />
      </a> */}
      {props.children}
      <footer>footer</footer>
    </>
  );
}
