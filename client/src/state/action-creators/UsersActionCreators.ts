import { UsersActionType } from "../action-types/UsersActionTypes";
import { Dispatch } from "redux";
import { IUser } from "../../models/IUsers";
import { UsersServices } from "../../services/UsersServices";
import { UserAction } from "../actions/UsersActions";

export const GetAllUsers = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UsersActionType.GETALL_STARTED });

  try {
    const users = await UsersServices.getAll();
    dispatch({ type: UsersActionType.GETALL_SUCCESS, users: users });
  } catch (e) {
    dispatch({ type: UsersActionType.GETALL_FAILURE, error: e })
  }
}

export const SetCurrentUser = (user: IUser) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UsersActionType.SET_CURRENT_USER, currentUser: user })
}

export const AddUser = (user: IUser) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UsersActionType.ADDUSER_STARTED });
  try {
    const users = await UsersServices.insert(user);
    dispatch({
      type: UsersActionType.ADDUSER_SUCCESS,
      users: users
    })
  } catch (e) {
    dispatch({ type: UsersActionType.ADDUSER_FAILURE, error: e })
  }
}

export const UpdateUser = (user: IUser) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UsersActionType.UPDATEUSER_STARTED });
  try {
    const users = await UsersServices.update(user);
    dispatch({
      type: UsersActionType.UPDATEUSER_SUCCESS,
      users: users
    })
  } catch (e) {
    dispatch({ type: UsersActionType.UPDATEUSER_FAILURE, error: e })
  }
}

export const DeleteUser = (user: IUser) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UsersActionType.DELETEUSER_STARTED });
  try {
    const users = await UsersServices.delete(user);
    dispatch({
      type: UsersActionType.DELETEUSER_SUCCESS,
      users: users
    });
  } catch (e) {
    dispatch({ type: UsersActionType.DELETEUSER_FAILURE, error: e })
  }
}