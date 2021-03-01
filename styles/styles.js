import { css, Global } from '@emotion/react';

// Home
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

// Shop Item Site
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

  }
  p {
    position: fixed;
    right: 15px;
    top: 15px;
  }
  img {
    margin-right: 20px;
    :hover {
      background-color: #61ffe7;
  }
`;

export const navLinks = css`
  padding-bottom: 10px;
  a {
    :hover {
      background-color: #61ffe7;
    }
  }
`;

export const cartImg = css`
  padding-bottom: none;
  position: relative;
  top: 5px;
`;

export const storeItemList = css`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 80%;
  margin: auto;
  justify-content: space-between;
`;

export const storeItemListSingle = css`
  background-color: yellow;
  max-width: 480px;
  min-width: 480px;
  max-height: 350px;
  min-height: 350px;
  margin: 20px;
  border-radius: 30px;
  box-shadow: 3px 2px 10px 0 white;
  transition: 2s;



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
      transform: scale(1.3);
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
    color: blue;
    font-weight: 600;

  }
  `;

export const storeItemListInfo = css`
  /* display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0; */
`;

// Single Item Page
export const singleItemPage = css`
  display: block;
  justify-content: center;
  min-width: 480px;
  width: 50%;
  margin: auto;
  background-color: yellow;
  border-radius: 10px;
  box-shadow: 4px 2px 20px 0 white;

  img {
    margin: 30px;
    width: 250px;
    height: 100%;
  }
  p {
    text-align: center;
    font-size: 17px;
    line-height: 1.3;
    letter-spacing: 0.5px;
    padding: 20px;
  }

  div {
  }
`;

export const singleItemPageBuyField = css`
  border: 2px solid grey;
  border-radius: 15px;
  width: 200px;
  float: right;
  padding: 20px;
  margin: 30px;

  a {
    color: grey;

    :nth-child(1) {
      font-weight: 800;
      color: #b12704;
      line-height: 24px;
      font-size: 18px;
    }
  }

  button {
    margin-top: 30px;
    padding: 10px;
    background-color: yellowgreen;
    color: black;
    font-size: 16px;
    border-radius: 5px;
    :active {
      background-color: darkgreen;
    }
  }
`;

export const backToStoreButton = css`
  position: fixed;
  padding: 10px;
  background-color: yellowgreen;
  font-size: 16px;
  border-radius: 5px;
  border: 2px;
  left: 30px;
  top: 100px;
`;

// Cart Page

export const cartItemLayout = css`
  width: 80%;
  min-width: 480px;
  margin: auto;
`;

export const cartItemLayoutSingle = css`
  background-color: yellow;
  border-radius: 15px;
  display: flex;

  min-width: 480px;
  max-height: 200px;
  min-height: 200px;
  margin-bottom: 40px;
  align-items: center;
  font-size: 18px;
  padding: 30px;

  img {
    max-height: 150px;
    margin: 30px;
  }
  p {
    display: flex;
    margin: auto;
    padding: 20px;
  }
  button {
    padding: 5px;
    background-color: yellowgreen;
    color: black;
    font-size: 16px;
    border-radius: 5px;

    :active {
      background-color: darkgreen;
    }
  }
`;
