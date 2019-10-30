import React, { PureComponent } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import CartTools from "../../tools/cart/CartTools";
import "../../components/Cart/Cart.css";

class Cart extends PureComponent {
  state = { productData: null };

  getDataFromLocal = () => {
    this.setState({ productData: CartTools.getCartData() });
  };

  componentDidMount() {
    this.getDataFromLocal();
  }

  render() {
    const { productData } = this.state;
    return (
      productData && (
        <div className="Content">
          <Paper className="cart-table">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>№</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell align={"center"}>Count</TableCell>
                  <TableCell>{}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(productData).map((row, index) => (
                  <TableRow key={productData[row].id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{productData[row].name}</TableCell>
                    <TableCell>{productData[row].price}$</TableCell>
                    <TableCell align={"center"}>
                      <div>
                        <Button
                          onClick={() => {
                            CartTools.takeAwayAnotherOne(productData[row].id);
                            this.getDataFromLocal();
                          }}
                        >
                          -
                        </Button>
                        {productData[row].count}
                        <Button
                          size="small"
                          onClick={() => {
                            CartTools.addAnotherOne(productData[row].id);
                            this.getDataFromLocal();
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="default"
                        onClick={() => {
                          CartTools.removeFromCart(productData[row].id);
                          this.getDataFromLocal();
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      )
    );
  }
}
export default Cart;
