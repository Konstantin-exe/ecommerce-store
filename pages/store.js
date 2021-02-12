import Head from 'next/head';
import Layout from './components/Layout';

export default function Store() {
  return (
    <Layout>
      <Head>
        <title>Show me your Store</title>
      </Head>
      <h1>Store</h1>
      <p>This will become the Store Page</p>
      <div>
        <div style={{ maxWidth: 350 }}>
          <p>IMAGE 1</p>
          <p>Lorem Ipsum</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
            <br />
            <br />
            Read more.
          </p>
        </div>
        <div style={{ maxWidth: 350 }}>
          <p>IMAGE 2</p>
          <p>Lorem Ipsum</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
            <br />
            <br />
            Read more.
          </p>
        </div>
        <div style={{ maxWidth: 350 }}>
          <p>IMAGE 3</p>
          <p>Lorem Ipsum</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
            <br />
            <br />
            Read more.
          </p>
        </div>
      </div>
    </Layout>
  );
}
