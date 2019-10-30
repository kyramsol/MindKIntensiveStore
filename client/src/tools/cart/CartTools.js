class CartTools {
  static getCartData() {
    return JSON.parse(localStorage.getItem("cart"));
  }

  static setCartData(item) {
    localStorage.setItem("cart", JSON.stringify(item));
  }

  static addToCart(productData) {
    let cartData = this.getCartData() || {};

    if (cartData.hasOwnProperty(productData.id)) {
      cartData[productData.id].count += 1;
    } else {
      cartData[productData.id] = {
        id: productData.id,
        name: productData.name,
        price: productData.price,
        count: 1
      };
    }

    this.setCartData(cartData);
  }

  static addAnotherOne(id) {
    let cartData = this.getCartData();

    if (cartData.hasOwnProperty(id)) {
      cartData[id].count += 1;
    }

    this.setCartData(cartData);
  }

  static takeAwayAnotherOne(id) {
    let cartData = this.getCartData();

    if (cartData.hasOwnProperty(id) && cartData[id].count > 0) {
      cartData[id].count -= 1;
    }

    this.setCartData(cartData);
  }

  static removeFromCart(id) {
    let cartData = this.getCartData();

    if (cartData.hasOwnProperty(id)) {
      delete cartData[id];
    }
    this.setCartData(cartData);
  }
}

export default CartTools;
