
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as users from './state/action-creators/UsersActionCreators';
import { UserState } from './state/reducers'
import { useEffect, useState } from 'react';
import { IUser, IUsers } from './models/IUsers';
import MaterialTable from "material-table";
import UserPanel from './components/panels/UserPanel';

function App() {
  const dispatch = useDispatch();
  const usersState: IUsers = useSelector((state: UserState) => state.users)
  const { DeleteUser, GetAllUsers, SetCurrentUser } = bindActionCreators(users, dispatch);

  const [openPanel, setOpenPanel] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const openEditPanel = () => {
    setIsEdit(true);
    setOpenPanel(true);
  }

  const isEditCallBack = () => {
    setIsEdit(false);
  }

  useEffect(() => {
    GetAllUsers()
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>CRUD Express/SQLite/Redux Thunk</h1>
      <MaterialTable
        style={{ width: '60%', left: '20%' }}
        title="All users"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
        ]}
        data={usersState.users}
        actions={[
          {
            icon: 'add_box',
            isFreeAction: true,
            tooltip: 'Add a user',
            onClick: () => {
              setOpenPanel(true);
            },
          },
          {
            icon: 'edit',
            tooltip: 'Edit user',
            onClick: (event, rowData) => {
              SetCurrentUser(rowData as IUser);
              openEditPanel()
            }
          },
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => {
              DeleteUser(rowData as IUser);
            },
            disabled: false
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
      {
        openPanel &&
        <UserPanel
          isOpen={openPanel}
          ClosePanel={() => setOpenPanel(false)}
          isEdit={isEdit}
          isEditCallBack={isEditCallBack}
        />
      }

    </>
  );
}

export default App;
