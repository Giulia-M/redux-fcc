const {createStore} = require('redux') 
//1 lezione 
const reducer = (state = 5) => state;
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:

const store = createStore(reducer)
console.log(store)
/**
Redux is a state management framework that can be used with a number of different web technologies, 
including React.
In Redux, there is a single state object that's responsible for the entire state 
of your application. 
This means if you had a React app with ten components, 
and each component had its own local state, the entire state of your app would be defined
by a single state object housed in the Redux store.
This also means that any time any piece of your app wants to update state, 
it must do so through the Redux store. The unidirectional data flow makes it easier to track
state management in your app.
*/

//2 lezione:  Get State from the Redux Store
  
// Change code below this line
const currentState = store.getState()
console.log(currentState)

/** The Redux store object provides several methods that allow you to interact with it. 
For example, you can retrieve the current state held in the Redux store object with the getState() 
method.
*/

// 3 lezione Define a Redux Action

const action = {
    type: 'LOGIN'
}
/**
 * Since Redux is a state management framework, updating state is one of its core tasks. 
 * In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object 
 * that contains information 
 * about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. 
 * Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is
 *  optional, actions must carry a type property that specifies the 'type' of action that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. 
The store then conducts the business of updating state based on the action that occurred.
*/


//4 lezione
/**Define an Action Creator
 After creating an action, the next step is sending the action to the Redux store so it can update its state.
 In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. 
 In other words, action creators create objects that represent action events.
*/
  // Define an action creator here:
   const actionCreator = () => action 

// 5 lezione
/** Dispatch an Action Event
dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from 
an action creator sends an action back to the store.
Recall that action creators return an object with a type property that specifies the action that has occurred. 
Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are 
equivalent, and both dispatch the action of type LOGIN:
*/
const store1 = createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => ({type: 'LOGIN'})
  
  console.log(store1.dispatch(loginAction()));
//__________________________________________________
  