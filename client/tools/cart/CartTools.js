export default class CartTools {
  getCartData() {
    return JSON.parse(localStorage.getItem("cart"));
  }
  setCartData(item) {
    localStorage.setItem("cart", JSON.stringify(item));
  }
  AddToCart(productData){
      let cartData = this.getCartData() || {};
      cartData[productData.id] = [productData.name, productData.price];
      this.setCartData(cartData);
  }
}
