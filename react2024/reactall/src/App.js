import React from 'react';
import './App.css';
import Link from './Link';
import User from './User'
import Comment from './Hooks/UseState/Comment';
import Loading from './Hooks/UseState/Loading';
import UserForm from './Hooks/UseState/UserForm';
import Users from './Hooks/UseState/Users';
import Theme from './Hooks/UseState/Theme';
import Main from './Hooks/UseEffect/Main';

function App() {
  return (
    <>
    <h1>React</h1>
     <Link title='Tutorial: Tic-Tac-Toe' content='content1' link='https://react.dev/learn/tutorial-tic-tac-toe'/>
    {/* <User userName="Kalim"/>
    <Comment/> */}
    {/* <Loading/> */}
    {/* <UserForm/> */}
    {/* <Users/> */}
    {/* <Theme/> */}
    <Main/>
    </>
   
  )
}

export default App;
