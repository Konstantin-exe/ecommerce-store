import { css, Global } from '@emotion/react';

export const navBar = css`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #ff00ff;
  font-weight: 530;
  font-size: 18px;
  z-index: 100;

  a {
    margin-right: 100px;
    text-decoration: none;
    padding: 15px;
    :nth-child(2) {
      margin-right: 20px;
    }
  }
`;

export const navLinks = css`
  a {
    :hover {
      background-color: #61ffe7;
    }
  }
`;

export const storeItemList = css`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 80%;
  margin: auto;
  justify-content: space-between;
`;
export const storeItemListCard = css`
  /* position: relative;
  top: -350px;
  right: 20px;
  background-color: yellow;
  max-width: 480px;
  min-width: 480px;
  max-height: 360px;
  min-height: 360px;
  margin: 20px;
  border-radius: 100px;
  z-index: -1;
  opacity: 0.8;
  -webkit-filter: blur(7px); */
`;

export const storeItemListSingle = css`
  background-color: yellow;
  max-width: 480px;
  min-width: 480px;
  max-height: 350px;
  min-height: 350px;
  margin: 20px;
  border-radius: 40px;


  img {
    display: block;
    margin: auto;
    margin-top: 0px,
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
    padding: 15px;
  }
  img:hover {
      cursor: pointer;
    }

  h4 {
    text-align: center;
    font-size: 30px;
    margin-left: auto;
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    display: block;
    text-align: center;
    margin: auto;
    font-size: 17px;
    max-width: 400px;
  }
  a {
    display: block;
    text-align: center;
  }
  div {
    display: flex;
    position: relative;
    margin-top: 20px;
    color: grey;

  }
  `;

export const storeItemListInfo = css`
  /* display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0; */
`;

export const homeHeading = css`
  margin-bottom: 0px;
`;
export const homeHead = css`
  display: block;
  z-index: -1;
  height: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  :hover {
    cursor: pointer;
  }
`;
