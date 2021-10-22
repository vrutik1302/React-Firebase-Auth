import * as types from "./actionType";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSucess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSucess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};
