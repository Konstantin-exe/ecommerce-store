/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { navBar, navLinks, cartImg, footer } from '../styles/styles';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const showCookieLength = Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart') || '').length
    : 0;

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
                data-cy="cartIcon"
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

      <footer css={footer}>
        <p>
          Though predated by another group in leadership in the Citadel, the
          Council consisted of six Ricks who stood out from the rest. The
          spokesman for the Council was Riq IV. The other Council members were
          Rick Prime, Quantum Rick, Maximums Rickimus, Zeta Alpha Rick, and
          Ricktiminus Sancheziminius.{' '}
        </p>
        <Link href="/fu">
          <img src="/img/Council_of_Ricks.png" alt="council" width={250} />
        </Link>
        <Link href="https://www.youtube.com/watch?v=RiL4kGE2-oQ">
          <p>© 1998-2666, Council of Rick Inc.</p>
        </Link>
      </footer>
    </>
  );
}
