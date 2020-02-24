import React from "react";
import Counter from "../Counter";
import "./index.css";

import { formatPrice } from "../../services/formatPrice";

const Cart = ({ selectedProducts, onAdd, onRemove }) => {
  const deliveryPrice = 2.5;

  const subtotals = selectedProducts.reduce(
    (a, b) => a + b.price * b.quantity,
    0
  );

  const totals = subtotals + deliveryPrice;

  return (
    <div>
      <div className="cart-container">
        <div className="cart">
          <button
            className="button-cart"
            disabled={selectedProducts.length === 0 ? true : false}
          >
            Valider mon panier
          </button>

          {selectedProducts.length === 0 && (
            <div className={"empty-cart"}>
              <p>Votre panier est vide</p>
            </div>
          )}

          {selectedProducts.map((product, index) => {
            return (
              <div key={index} className="full-cart">
                <Counter
                  quantity={product.quantity}
                  onLess={() => onRemove(product)}
                  onMore={() => onAdd(product)}
                />
                <p>{product.title} </p>
                <p className="price-full-cart">{formatPrice(product.price)}</p>
              </div>
            );
          })}

          {selectedProducts.length > 0 && (
            <div className="cart-total">
              <div className={"cart-total"}>
                <div className="cart-resum-price">
                  <p className="cart-subtotal">
                    Sous-total : {formatPrice(subtotals)}
                  </p>
                  <p>
                    Frais de Livraison :{" "}
                    <span className="price-delivery">
                      {formatPrice(deliveryPrice)}
                    </span>
                  </p>
                </div>
                <p className="total">
                  <strong>Total: {formatPrice(totals)}</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
