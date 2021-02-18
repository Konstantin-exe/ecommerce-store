import { css, Global } from '@emotion/react';
import Image from 'next/image';

export const globalStyles = (
  <Global
    styles={css`
      html::before {
        content: '';
        position: fixed;
        /* background-size: cover; */
        /* background-attachment: fixed; */
        background-repeat: no-repeat;
        z-index: -100;
        width: 100%;
        min-width: 480px;
        height: 100%;
        background-color: #14c2cc;
        background-image: radial-gradient(
            circle farthest-side at top right,
            transparent,
            #0d64ff
          ),
          radial-gradient(
            ellipse farthest-corner at 0% 100%,
            transparent,
            #ff00a0
          );
        animation: bg-change 20s infinite;
      }

      @keyframes bg-change {
        0%,
        100% {
          filter: hue-rotate(-45deg);
        }
        50% {
          filter: hue-rotate(50deg);
        }
      }
      body {
        /* background-image: url('/img/page-background.png');
        z-index: 1000000;
        background-attachment: fixed;
        background-size: center;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        height: 100vh; */
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      h1 {
        font-size: 100px;
        color: #61ffe7;
        text-align: center;
        margin-top: 100px;
        margin-bottom: 50px;
        -webkit-animation: pulsate 3s ease-out;
        -webkit-animation-iteration-count: infinite;
        opacity: 0.5;
      }
      @-webkit-keyframes pulsate {
        0% {
          opacity: 0.7;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.7;
        }
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;
