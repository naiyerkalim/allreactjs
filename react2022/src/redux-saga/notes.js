//generators in javascript
  //generators provide a new way to work with functions and iterators.
  //Using a generator,
    //you can stop the execution of a function from anywhere inside the function
    //and continue executing code from a halted position


//Redux
  //used for state management in complex application
  //It provides a predictable state container.
  //can share data in any component to any component.
  //Provider
    //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
  //Steps:
    //Action>>Reducer>>Store>>View
      //Actions
        //Actions are plain functions
        //It get data from a
        //and send data to reducer after process
        //Must have type key in return statement.
        //Much sync types with reducers.
          //Reducer
            //reducer handle store data.
            //Update data in store
            //Rules
            //Need one rootReducer
            //Reducer must return the some value.
            //The reducer must have some initial value.
//Saga
  //Its handle async data in Redux Like Api's Data.
  //We call it middleware.
  //Here we can write Async operations like time taking logics and API's call.
  //Steps:
    //Action>>Saga Operation>> Reducer>> Store>> View.

//Interview Question
//Q. How to get data from Redux to React
//Ans: By using useSelector Hook
//Q. How you call Actions in React.
//Ans: By using useDispatch hook, we can call Actions in react.
//Q. What does Actions Do?
//Ans: Take data from react and pass it to redux.
//Q. How Action know which data has to pass to reducers
//Ans: Using type of Actions
//Q. Why we use Generator function
//Ans.A generator is a process that can be paused and resumed and can yield multiple values. 
  //A generator in JavaScript consists of a generator function, which returns an iterable Generator object.
  
