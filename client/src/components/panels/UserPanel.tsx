import { Button, Checkbox, Divider, Drawer, FormControlLabel, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import * as _ from "lodash";
import { IUser, IUsers } from '../../models/IUsers';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserState } from '../../state/reducers';
import * as users from '../../state/action-creators/UsersActionCreators';

const useStyles = makeStyles((theme: Theme) => ({
  DrawerRigthLength: {
    width: 400,
    padding: '20px'
  },

  StyledForm: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '25px',
    borderRadius: '15px',
    padding: '20px',
  }
}));

type Props = {
  ClosePanel: Function;
  isEditCallBack: Function;
  isOpen: boolean;
  isEdit?: boolean;
}



const UserPanel: React.FC<Props> = ({ ClosePanel, isOpen, isEdit, isEditCallBack }) => {

  const dispatch = useDispatch();
  const usersState: IUsers = useSelector((state: UserState) => state.users)
  const { AddUser, UpdateUser, SetCurrentUser } = bindActionCreators(users, dispatch);

  const [user, setUser] = useState<IUser>(
    {
      id: 0,
      name: "",
      email: "",
      password: ""
    } as IUser);

  const [seePassword, setSeePassword] = useState<boolean>(false);

  const classes = useStyles();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!_.isEmpty(user)) {
      if (!isEdit) {
        AddUser(user);
      } else {
        UpdateUser(user);
      }
      setUser({} as IUser);
      ClosePanel()
    }
  }

  useEffect(() => {
    if (usersState?.currentUser) {
      setUser(usersState?.currentUser);
    }
    return () => {
      if (isEdit) {
        SetCurrentUser({} as IUser);
        isEditCallBack();
      }

    }
  }, [])

  return (
    <>
      <Drawer anchor={'right'} open={isOpen} onClose={() => ClosePanel}>
        <div className={classes.DrawerRigthLength} role="presentation">
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <h1>{!isEdit ? 'Add user' : 'Edit user'}</h1>
          </Grid>
          <Divider />
          <Grid container spacing={3}>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.StyledForm}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="standard-basic"
                  label="Name"
                  value={user.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUser({ ...user, name: e.target.value })
                  }
                  } />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="standard-basic"
                  label="Email"
                  value={user.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUser({ ...user, email: e.target.value })
                  }
                  } />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox
                    checked={seePassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSeePassword(e.target.checked) }}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />}
                  label="See Input Password"
                />

              </Grid>
              {seePassword ?
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setUser({ ...user, password: e.target.value })
                    }
                    } />
                </Grid> : null}
              <Grid container justify="space-evenly">
                <Grid item  >
                  <Button variant="contained" type="submit">Save changes</Button>
                </Grid>
                <Grid item >
                  <Button variant="contained" onClick={() => ClosePanel()}>Cancel</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </div>
      </Drawer>
    </>
  )
}

export default UserPanel