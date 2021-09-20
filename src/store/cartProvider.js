import CartContext from "./cartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, action) => {
  let updatedItems = "";
  let updateTotalAmount = "";
  switch (action.type) {
    case "ADD_ITEM":
      updateTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      let existingCartItemIndex;
      const existingCartItem = state.items.find((item, index) => {
        existingCartItemIndex = index;
        return item.id === action.payload.id;
      });
      let updatedItem;
      if (existingCartItem) {
        console.log("existing");
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItem = { ...action.payload };
        updatedItems = state.items.concat(updatedItem);
      }
      break;
    case "REMOVE_ITEM":
      break;
    default:
      break;
  }
  return {
    items: updatedItems,
    totalAmount: updateTotalAmount,
  };
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    console.log("addItem");
    console.log(item);
    dispatchCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  const removeItemFromCartHandler = (id) => {};
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
