/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Link from 'next/link';

export default function Fu() {
  return (
    <>
      <Head>
        <title>Universe Store</title>
      </Head>

      <Link href="/">
        <img src="../../img/fu.png" alt="fu" />
      </Link>
    </>
  );
}
