# react_redux_basic_template
react_redux_basic_template basic single react and redux file with web pack to create add subtract app.

Uses node for web serving to localhost 

npm run server will start at at localhost:3000


second terminal:

npm run pack to webback it all up

No bootsrap or styles of any kind. 

This includes basic consts for actions and a full description of how redux works to store state in a simple app.

# Contents of entry.js description and notes for explaining the facits of React - Redux 
# below (sorry for typos, they will be fixed)

 In this most simple version it this will contain our entire ract and redux app
 
1. redux rule 1: The entire stae of the app is held in a single state object. This is called state or stateTree
2. redux rule 2: State is read only Cannot change state directly. 

State is changed by dispaching actions
action is a plain javascript object desctibing the application state change.The action doesn't do the change though, but contains the actions to perform.

3. redux rule 3. Try to only use PURE functions. So you cannot change passed in objects or data, but instead return a changed value. Dependable and predicible.

Example: return Array.map(arrayToReturn) to map data to an array

Example: or simply return pararm + param to in a simple addition function. 

  Pure sunction never overwrite the values passedd to them.
  
4. Redux reducer function: state mutation functions must be pure functions: takes the previous state and the action passed and returns the next state.

This is an observer and a state machine rolled into one. 
A single pure function updates state, but is fast because it doesn't change the entire state, just the changes. The rest of the state is passed intact. 

5. When cretaing the reducer, always return the inital stae is if is not yet defined:
  function counter(state =0, action) {...case statements for state manipulations returns}
   ours can be 0 because it is simkply a counter.
   
6. store (storage center for our state). Binds the state together:

  A. Holds current application state
  B. Dispatches actions
  C. uses the reducer to tell it what action to perform
    store is created with const store= createStore(counter); - counter is the reducer function
    store functions:
    
    A. getState() - return current state

    B. store.dispatch ({type:'INCREMENT'}) - to change state of application
    
    C. store.subscribe(() => {call back to update UI of app to reflect application state})
7. render() method subscribes to store and ais called on firts load to set UI store.subscribe(render); to subscribe the store to thye render function
    



