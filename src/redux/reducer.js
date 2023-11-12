import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
        console.warn("ADD_TO_CART condition", action);
        return 1 + 1
    default:
        return "no action called"
    }
};
