import * as actionsType from "./actionsType";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: actionsType.GET_USERS,
      payload: null
    });
    const data = [];
    dispatch({
      type: actionsType.GET_USERS,
      users: data
    });
  } catch (error) {
    console.log(error);
  }
};
