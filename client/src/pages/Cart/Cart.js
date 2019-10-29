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
    let i = 0;
    return (
      productData && (
        <div className="Content">
          <Paper className="cart-table">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>№</b>
                  </TableCell>
                  <TableCell>
                    <b>Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Price</b>
                  </TableCell>
                  <TableCell>{}</TableCell>
                  <TableCell>
                    <b>Count</b>
                  </TableCell>
                  <TableCell>{}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(productData).map(row => (
                  <TableRow key={row[1].id}>
                    <TableCell>{(i += 1)}</TableCell>
                    <TableCell>{row[1].name}</TableCell>
                    <TableCell>{row[1].price}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          CartTools.takeAwayAnotherOne(row[1].id);
                          this.getDataFromLocal();
                        }}
                      >
                        -
                      </Button>
                      {row[1].count}
                      <Button
                        size="small"
                        onClick={() => {
                          CartTools.addAnotherOne(row[1].id);
                          this.getDataFromLocal();
                        }}
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="default"
                        onClick={() => {
                          CartTools.removeFromCart(row[1].id);
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
