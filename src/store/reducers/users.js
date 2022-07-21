import * as actionsType from "../actions/actionsType";

const usersReducer = (
  state = {
    users: null,
    items: [
      {
        id: 1,
        name: "Admin",
        users: [],
        isLocked: true
      },
      {
        id: 2,
        name: "Office",
        users: [],
        isLocked: false
      },
      {
        id: 3,
        name: "Managers",
        users: [],
        isLocked: false
      },
      {
        id: 4,
        name: "Head Office",
        users: [],
        isLocked: false
      },
      {
        id: 5,
        name: "Customer Service",
        users: [],
        isLocked: false
      },
      {
        id: 5,
        name: "Customer Service",
        users: [],
        isLocked: false
      },
      {
        id: 6,
        name: "Wealth Managment",
        users: [],
        isLocked: false
      },
      {
        id: 7,
        name: "IT",
        users: [],
        isLocked: false
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case actionsType.GET_USERS:
      return {
        ...state,
        users: action.users
      };
      break;
    default:
      return state;
  }
};

export default usersReducer;
