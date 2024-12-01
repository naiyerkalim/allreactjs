// A Predictable State Container for JavaScript Applications
  //predictable: the outcome of a given action on the application's state is always consistent and deterministic. 
   //This predictability is achieved through the following key principles:
    //Unidirectional Data Flow:
     // Redux follows a strict unidirectional data flow: actions are dispatched, reducers process them, and the store updates its state. This linear flow makes it easy to trace how state changes occur.
    // Pure Functions as Reducers:
     // Reducers are pure functions, meaning they always return the same output for the same input. This ensures that given a specific state and action, the resulting new state will always be the same.
    // Immutable Updates:
     // Redux enforces immutable updates, where new state objects are created instead of modifying the existing ones. This prevents side effects and makes it easier to reason about state changes.
// Benefits of Predictable State Changes:
 // Debugging: With predictable state changes, you can easily trace how the application's state evolved to a particular point, making debugging more efficient.
 // Testing: Predictability makes it easier to write unit tests for reducers, as you can assert that given specific inputs, the output will be as expected.
 // Time-Travel Debugging: Redux DevTools leverage predictability to allow you to step back and forth through action history, inspecting the state at each point in time.
 // Maintainability: Predictable state changes lead to more maintainable code, as it's easier to understand and modify the application's behavior without introducing unintended side effects.
 

//Redux Toolkit
 //Redux Toolkit is the official, recommended way to write Redux logic. It simplifies common tasks like setting up the store, 
  //managing state, and writing reducers and actions. Redux Toolkit is designed to make Redux more approachable, reduce boilerplate code, and improve performance.

//Why Use Redux Toolkit?
 // Simplifies Setup: Handles typical Redux setup tasks (e.g., configuring the store).
 // Reduces Boilerplate: Combines reducers, actions, and types into a cleaner syntax.
 // Improves Performance: Comes with built-in optimizations like immer for immutable updates.
 // Better Developer Experience: Built-in tools like middleware and debugging utilities.

//React-Redux:
 // It is the official binding library to integrate Redux with React.
 // It connects Redux's state management with React components.

//3 core concepts of redux
 //Store: It holds the state of our application
 //action: it describe what happend in the application.
 //reducer: It handles the action and describe how to update the state.

//3 principals
 //1. The global state of your application is stored as an object inside a single store.
 //2. The only way to change the state is to dispatch an action, an object that describe what happend.
 //3. To specify how the state tree is updated based on actions, you write pure reducers.

 //Example with Cake application
   //Actions:
     //this is the only way your application can interact with the store.
     //its carry some info from your app to the redux store.
     //Plain javascripts object.
     //Have a type property that describes something that happend in the application.
     //The type property is typycally defined as string constant.
     //an action is an object that has type property. 

    //Store:
     //Holds application state.
     //Allows access to state via getState();
     //allow state to be updated via dispatch(action).
     //register listener via subscribe method.
     //handles unregisterering of listener via the function returned by subscribe listener.

     //steps:
       //create a store > declare a initial state and reducer > define your action and action creater > subscribe to the store > dispatch action to update the store > unsubscribe the changes.

    //combine Reducer:
      //combineReducers function is used to combine multiple reducers into a single reducer function. This allows you to split your Redux state management logic into smaller, more manageable pieces, each handling a specific slice of the state, and then combine them to form the complete state.

    //Middleware:
     //middleware is a way to enhance or modify the store's dispatch function to add additional functionality during the dispatch process. It acts as a pipeline that sits between dispatching an action and the moment it reaches the reducer.

     //Axios:
      //request to an API end point.

    //redux-thunk:
     // Define async action creator.

