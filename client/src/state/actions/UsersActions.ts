import { IUser } from "../../models/IUsers";
import { UsersActionType } from '../action-types/UsersActionTypes'



interface GetAllStarted {
  type: UsersActionType.GETALL_STARTED;
};
interface GetAllSuccess {
  type: UsersActionType.GETALL_SUCCESS;
  users: IUser[];
};
interface GetAllFailed {
  type: UsersActionType.GETALL_FAILURE;
  error: string;
};

interface SetCurrentUser {
  type: UsersActionType.SET_CURRENT_USER;
  currentUser: IUser;
}


interface AddStarted {
  type: UsersActionType.ADDUSER_STARTED;
};
interface AddSuccess {
  type: UsersActionType.ADDUSER_SUCCESS;
  users: IUser[];
};
interface AddFailed {
  type: UsersActionType.ADDUSER_FAILURE;
  error: string;
};


interface UpdateStarted {
  type: UsersActionType.UPDATEUSER_STARTED;
};
interface UpdateSuccess {
  type: UsersActionType.UPDATEUSER_SUCCESS;
  users: IUser[];
};
interface UpdateFailed {
  type: UsersActionType.UPDATEUSER_FAILURE;
  error: string;
};


interface DeleteStarted {
  type: UsersActionType.DELETEUSER_STARTED;
};
interface DeleteSuccess {
  type: UsersActionType.DELETEUSER_SUCCESS;
  users: IUser[];
};
interface DeleteFailed {
  type: UsersActionType.DELETEUSER_FAILURE;
  error: string;
};

export type UserAction =
  GetAllStarted |
  GetAllSuccess |
  GetAllFailed |

  SetCurrentUser |

  AddStarted |
  AddSuccess |
  AddFailed |

  UpdateStarted |
  UpdateSuccess |
  UpdateFailed |

  DeleteStarted |
  DeleteSuccess |
  DeleteFailed;
