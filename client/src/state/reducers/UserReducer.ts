import { IUser, IUsers } from "../../models/IUsers";
import { UsersActionType } from "../action-types/UsersActionTypes";
import { UserAction } from "../actions/UsersActions";

const initialStateUser: IUsers = {
  users: [],
  error: "",
  loading: false,
  currentUser: {} as IUser
}

const UserReducer = (state: IUsers = initialStateUser, action: UserAction) => {
  switch (action.type) {
    case UsersActionType.GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: state.users
      }
    case UsersActionType.GETALL_STARTED:
      return {
        ...state,
        loading: true,
        error: "",
        users: state.users
      }
    case UsersActionType.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: action.users
      }

    case UsersActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }

    case UsersActionType.ADDUSER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: state.users
      };
    case UsersActionType.ADDUSER_STARTED:
      return {
        ...state,
        loading: true,
        error: "",
        users: state.users
      };
    case UsersActionType.ADDUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: action.users
      };


    case UsersActionType.UPDATEUSER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: state.users
      };
    case UsersActionType.UPDATEUSER_STARTED:
      return {
        ...state,
        loading: true,
        error: "",
        users: state.users
      };
    case UsersActionType.UPDATEUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: action.users
      };


    case UsersActionType.DELETEUSER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        users: state.users
      };
    case UsersActionType.DELETEUSER_STARTED:
      return {
        ...state,
        loading: true,
        error: "",
        users: state.users
      };
    case UsersActionType.DELETEUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: action.users
      };


    default:
      return state
  }
}

export default UserReducer;