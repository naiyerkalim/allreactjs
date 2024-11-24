import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserFetch } from './component/redux-saga-api/actions';

export default function MainSaga() {
const dispatch= useDispatch();
const users= useSelector(state=>state.myReducer.users)
  return (
    <div>
      <div>
        User: {users.map((user=>(
            <div>{user.name}</div>
        )))}
      </div>
    </div>
  );
}
