const cart = [];
const quantity = 1;

const addToCart = (id, product) => {
  const productAlreadyInCart = cart.find((cartItem) => {
    if (cartItem.id === id) {
      return true;
    } else {
      return false;
    }
  });
  if (!productAlreadyInCart) {
    return [
      ...cart,
      {
        quantity: quantity,
        id: product.id,
      },
    ];
  }
  const newCart = [...cart];
  const productIndex = newCart.findIndex((cartItem) => {
    return cartItem.id === productAlreadyInCart.id;
  });
  newCart[productIndex].quantity += quantity;
  return newCart;
};

test('adding/removing infos from cookie', () => {
  const id = 1;
  const product = { id };
  const result = addToCart(id, product);
  expect(result).toStrictEqual([{ ...product, quantity: 1 }]);
});
