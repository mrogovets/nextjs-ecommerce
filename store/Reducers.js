import ACTIONS from "./Actions";

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
    default:
      return state;
  }
};

export default redusers;
