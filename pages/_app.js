import { css, Global } from '@emotion/react';
import Image from 'next/image';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body::before {
        content: '';
        /* position: fixed; */
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        z-index: -100;
        width: 100%;
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
        animation: bg-change 10s infinite;
      }

      @keyframes bg-change {
        0%,
        100% {
          filter: hue-rotate(0deg);
        }
        50% {
          filter: hue-rotate(-45deg);
        }
      }
      body {
        background-image: url('../public/page-background.png');
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
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
