///React: A javascript library for building user interfaces.
//Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, but work in isolation and return HTML
//component always returns a single element.

//Class components were the primary way to handle state and lifecycle methods in React before the introduction of React Hooks in functional components.
  //Common Lifecycle Methods:
 // Mounting (Component Creation)
 // constructor(): Initialize state and bind methods.
 // componentDidMount(): Run after the component is added to the DOM.
//  Updating (Component Re-rendering)

// componentDidUpdate(prevProps, prevState): Run after updates.
// shouldComponentUpdate(nextProps, nextState): Control re-renders.
// Unmounting (Component Removal)

// componentWillUnmount(): Cleanup before the component is removed.

///Npm is a tool that use to install packages. Npx is a tool that use to execute packages.
/// If you wish to run package through npm then you have to specify that package in your package.json and install it locally.
// A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.
///ReactDom.render(): It controls the content of the container node you pass in.  

//JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code directly within JavaScript. 
 //JSX makes it easier to visualize the structure of the UI and integrates seamlessly with React components.

///Babel is js compiler. it converts the JSX to vanilla JavaScript. 
//You can view babel as an intermediate step between your code and "executable" code. 
//React also uses ES6, which is not supported by most of the browsers. 
//Babel converts the ES6 code to a code which is compatible with the browsers.

//Webpack is a popular module bundling system built on top of Node. js. 
//It can handle not only combination and minification of JavaScript and CSS files, 
//but also other assets such as image files (spriting) through the use of plugins.

// Props are short for "properties." They are read-only inputs passed from a parent component to a child component. 
// Props allow components to be reusable by enabling them to receive different data.
//PropTypes in React is a built-in type-checking feature that validates the props passed to a component. 
  //It helps catch bugs by ensuring the correct data type and structure of props.

//State
 //Definition: State is a built-in React object that allows components to hold and manage their own data.
 


//defaultProps in React is a feature used to define default values for the props of a component when no value is explicitly passed.
  //NOTE: Support for defaultProps will be removed from function components in a future major release. 

///Components are independent and reusable bits of code. 

//for reactjs we need minimum 2 files: need to import 2 
//<1>. react and
//<2>. react-dom
//render(): show up.
//ReactDOM.render('what to show', 'where to show', callback function)cd
//in js we use DOM for getting id from html page.

//ReactDom return single parent element.
//js expression can be defined in jsx but not js initialization.
// An attribute is a property of an element used to provide access to additional data required for that specific element to process the output.
//In React, all DOM properties and attributes (including event handlers) should be camelCased.

///useState
//What is a Hook? A Hook is a special function that lets you “hook into” React features. 
//example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

//useEffect
 //useEffect is a React Hook used to manage side effects in functional components. 
//  Side effects include tasks like:

// Fetching data from an API.
// Subscribing to services (e.g., WebSockets).
// Interacting with the DOM (e.g., timers, animations).
// Updating the browser's title.

//lifeCycle inside useEffect
 //useEffect(() => {
    // console.log("Component mounted");
    // }, []); // Empty dependency array

 //useEffect(() => {
  //     console.log("Count updated:", count);
  // }, [count]); // Runs when `count` changes

 //useEffect(() => {
//     console.log("Effect running");
//     return () => {
//         console.log("Cleanup on unmount");
//     };
// }, []); // Empty dependency array


//use of react constructor:
//1: initializing the local state by assigning an object to this.state.
//2: Binding event handler methods to an instance.

////React Life Cycle methods:
//It is the series of events that happens from the berth of the react component till its end.
//Every react component goes through 3 phases..
//1. Mounting: when react mounts or inserts component to DOM.
//2. Updating: When reacts updates its component whenever there is change of states or props.
//3. Unmounting: when react removes components from its DOM tree.

//Mounting phase: 
 //Constructor():
  //the constructor for a react component is called before it is mounted.
 //render():
  //it renders html to DOM
 //componentDidMount()
  //this mothi=od id called after your component is mounted and resdy.
  //in this method you can initiates the api call, load data from remote endpoint and also use setState() method.
//Updating phase:
 //componentDidUpdate() is invoked immediately after updating occures. this method is not called for the initial renders.

//Unmounting phase:
//this lifecycle method is called just before the component is unmounted and destryed.
//Re-rendering
//A second or subsequent render to update the state is called as re-rendering.
//Life Cycle methods
  //componentDidMount()
  //shouldComponentUpdate(nextProps, nextSates): let react know whether render should be triggered or not.
  //componentDidUpdate(prev prpos, prev states, snapshot)
  //componentWillUnmount()
  //getDerivedStatefromProps(props, state)// it gives a chance to copy any value from props//copy props into states
  //getSnapshotBeforeUpdate(): it called before render() and is use for capture some prperties which is not stored in the state
    //before we re-render that component.

///React Hooks:
 //Hooks are the functions which allows us to use state and lifecycle methods inside functional component.
 //react hooks provide a concept called context.
 //react context api allows you to easily access data at different levels of the component tree, without paasing props to every level.

 //when you need to paas only data around then use useContext instead redux.

 //useeffect
  //What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
  //React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

//useReducer
 //The useReducer hook is used for complex state manipulations and state transitions

//propdrilling
//Props drilling refers to the process of passing data from a parent component to a deeply nested child component via multiple intermediary components, 
  //even if those intermediary components don’t need or use that data. This can make the code harder to maintain and lead to a tightly coupled component structure.

//ContextApi
  //The Context API provides a way to share data across components without manually passing props through each level of the component tree.

//Q. How to prevent re-render in react component.
//useMemo: its returns memoized value.
//useCallback: It returns memoized function.
//Memoization using useMemo() and UseCallback() Hooks. 
//Memoization enables your code to re-render components only if there's a change in the props. 
//With this technique, developers can avoid unnecessary renderings and reduce the computational load in applications.




