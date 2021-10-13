import CartContext from "./cartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, action) => {
  let updatedItems = "";
  let updateTotalAmount = "";
  if (action.type === "ADD_ITEM") {
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
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    let existingCartItemIndex;
    let updatedItems;
    const existingCartItem = state.items.find((item, index) => {
      existingCartItemIndex = index;
      return parseInt(item.id) === parseInt(action.id.id);
    });
    const updateTotalAmount = state.updateTotalAmount - existingCartItem.price;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  };
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
