import * as actionsType from "./actionsType";

export const addUser = (users) => async (dispatch) => {
  try {
    dispatch({
      type: actionsType.ADD_USER,
      users
    });
  } catch (error) {
    console.log(error);
  }
};
export const removeUser = (users) => async (dispatch) => {
  try {
    dispatch({
      type: actionsType.REMOVE_USER,
      users
    });
  } catch (error) {
    console.log(error);
  }
};

export const selectProfile = (profile) => async (dispatch) => {
  try {
    if (!profile.isLocked) {
      dispatch({
        type: actionsType.SELECT_PROFILE,
        profile
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const saveProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: actionsType.SAVE_PROFILE
    });
  } catch (error) {
    console.log(error);
  }
};
