import { ACTIONS } from "./Actions";

const redusers = (state, actions) => {
  switch (actions.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: actions.payload,
      };
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: actions.payload,
      };
    case ACTIONS.ADD_CART:
      return {
        ...state,
        cart: actions.payload,
      };
    default:
      return state;
  }
};

export default redusers;
