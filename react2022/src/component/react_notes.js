//Reason to choose React
  //A javascript library for building user interfaces.
  //Easy Production of Dynamics Apps
  //Improved Performance
  //Reusable component.
  //Uni-Directional Data Flow
  //Easy Learning Curve
  //Web and Mobile Apps
  //Easy Debugging tool

  //Component
    //A component is a piece of the UI (user interface) that has its own logic and appearance. 
     //A component can be as small as a button, or as large as an entire page.
    //React components are JavaScript functions that return markup:
    //Components are independent and reusable bits of code.
    //They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
    //component always returns a single element.


  //JSX
  //JSX lets you put markup into JavaScript
  //jsx stands for Javascript+XML
  //jsx is an extention of javascript that allows you to write html in javascript file.
  //jsx syntax is not understandable by browser so we need transpiler like Babel to convert the code from jsx to javascript.
  //Why JSX?
    //JSX is faster as compared to normal javascript as it performs optimizations while translating to regular js.
    //It makes easier to us to create templates
    //Instead of separating to markup and logic in separated files , React uses components.
      //React.createElement
        //jsx is not mandatory syntax to use in React.
        //It is recommended as it offers lots of benefits, but still we can write plain js to create React Templates and 
        //that we can do with the help of React.createElement.

//NPM
  //Node Package Manager.
  //Npm is the package manager for the Node javascript platform.
  //Npm is a tool that use to install packages.
  //It is build on top of the Node.js
  //It is the world largest software Registry.

//Package
  //Package refers to code that has been made public
  //A package may made up of single or more code files
  //A package in general aids you in adding functionality to your application.
  //All of these files together make up the package.

//Babel
//Babel is js compiler. it converts the JSX to vanilla JavaScript. 
//You can view babel as an intermediate step between your code and "executable" code. 

//DOM
  //Document Object Model
  //It is the structural representation of all node in HTML Document.
  //DOM represent the UI of your Application
  //DOM manupulation is required to dyanamically change the content of web page.
  //for every DOM update, there will be re-render of all nodes.

//Vitual DOM
  //VDOM is the virtual representation of a real DOM.
  //React updates the state changes in Virtual DOM first and then it sync with real DOM.
  //Virual DOM is just like a bluprint of a machine, you can do the changes in bluprint but 
  //those changes will not directly apply on machine.
  //Virtual DOM is a Programming concept where virtual representation of UI is kept in memory and synced with real DOM by a library such as 
  //ReactDOM and this process is called reconciliation.
  //React compares the virtual DOM and pre-updated Virtual DOM and only the marks of subtree of component that are updated. 
  //This process is called Diffing.
  //The Algorithm behind diffing is called Diffing Algorithm.
  //React use keys to avoid re-rendering 
  //Keys:
    //A “key” is a special string attribute you need to include when creating lists of elements in React. 
    //Keys are used in React to identify which items in the list are changed, updated, or deleted. 
    //In other words, we can say that keys are used to give an identity to the elements in the lists.

//     How Reconciliation Works
// When the state or props of a React component change:

// New Virtual DOM Tree Creation:

// A new VDOM tree is generated based on the updated state/props.
// Comparison with the Previous VDOM Tree:

// React compares the new VDOM tree with the previous one using an algorithm to find differences (a process called "diffing").
// Update the Real DOM:

// React applies the minimal number of updates to the real DOM, based on the differences found.
  
//Reconciliation is the process of comparing two representations of a UI (usually a previous Virtual DOM tree and 
 //a new Virtual DOM tree) to determine the minimum set of changes required to update the real DOM. 
  //It is fundamental to frameworks like React to efficiently manage UI updates.

//How Reconciliation Works 
//Triggering Reconciliation:
 // Reconciliation begins when a React component's state or props change.
 // React generates a new Virtual DOM tree to represent the updated UI.
// Diffing Algorithm:
 // React compares the new Virtual DOM tree with the previous Virtual DOM tree to detect changes.
 // This comparison uses a highly optimized diffing algorithm.
// Applying Changes to the Real DOM:
  // Once React identifies the differences, it updates the real DOM with the minimum set of changes.



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
  //this method is called after your component is mounted and ready.
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

//Props
  //React allows us to pass information to a component using something called props(properties)
  //Communication is done from parent to child with the help of props.
  //It is an object which stores the value of attribute of a tag and work similar to the HTML Attributes
  //Props are passed to components in the same way as arguments passed in a function.
  //props are read only.

//PropTypes
  //As your app grows, you can catch a lot of bugs with typechecking.
  //To run typechecking on the props for a component, you can assign the special propTypes property:
  //When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. 
  //For performance reasons, propTypes is only checked in development mode.

//DefaultProps
  //You can define default values for your props by assigning to the special defaultProps property:

//Class Component
  //Every class component must extends a Base class called React.Component
  //return keyword will wrap up inside the render().
  //write js code inside render() method.
  //for accessing props in class component we have to use this keyword.
  //to initalize the state we use constructor.
  //to access state inside class constructor we need to call super() constructor and pass the props into super() constructor also.

//Why we should prefer functional component rather than class component.
  //in class component we need to deal with extends, constructor, this, but in functional we dont have to deal with these.

//Hooks
  //Hooks are the functions which allows us to use state and life cycle methods inside Functional Components.
//React Built-in Hooks
  //useState: to manage states
  //useEffect: to manage side effects like Api call.
  //useContext: to return current value for a context.
  //useReducer: a useState alternatively to help with complex state.
  //useMemo: it returns a memoized value that helps in performance optimazation.
  //useCallback: it returns a memorised version of callback to help a child component not re-render unnecessary
  //useRef: use to access child component imperatively.
  //useLayoutEffect: it fires at the end of all DOM mutations.
  //useDebugValue: helps tp display alabel in React Dev Tools for custom hook.
  
//Importants points about Hooks:
  //Hooks are only available for react version 16.8.0 or higher.
  //Hooks can only be used inside functional Components, can't use Hooks inside class Components.
  //Don't call hooks inside any nested functions, loops or any conditions.
  //Define Hooks on top of your components.
  //Never call hooks from regular functions. it should  call only from React functional components.
  //A hook can call another hook.
//Advantages of using hooks:
  //clean code
  //small bundle size.
  //Easy to learn
  //Easy to test
  //Encapsulating sideEffects.
  //Reusability.
  //*NO EXTRA PARSING:
    //browser dont understand classes so no nned to take care of extra transpilation of classess.

//Props:
  //props are like functions parameter.
  //Its immutable
  //props are use to pass data from parent to child
//States
  //states are like a local variables of a function.
  //its mutable
  //states are local to component so can't use outside component.

//useState Hooks
  //Its allows you to have states variable in functional components
  //The change in the state can be done with the help of user interactions or with some system generated events.

//web components
 //Web Components provide strong encapsulation for reusable components, 
 //while React provides a declarative library that keeps the DOM in sync with your data. 

//Error Boundaries:
 //Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, 
 //log those errors, and display a fallback UI instead of the component tree that crashed. 

 //which life cycle methods not supported by hooks
  //1. getSnapShotBeforeUpdate()
  //2. getDerieveStateFromError()
  //3. componentDidCatch()

//what happen if referesh page in redux
 //it remove data but if we are using redux persistence then we can store data.

//Does react follow MVC
 //No, It does not have C, controller.

//useId hook
  //it is used to genrate unique id.



