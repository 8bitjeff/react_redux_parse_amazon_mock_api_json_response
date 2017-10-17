/*
In this most simple version it this will contain our entire ract and redux app

redux rule 1: The entire stae of the app is held in a single state object. This is called state or stateTree
redux rule 2: State is read only Cannot change state directly.

State is changed by dispaching actions action is a plain javascript object desctibing the application state change.The action doesn't do the change though, but contains the actions to perform.

redux rule 3. Try to only use PURE functions. So you cannot change passed in objects or data, but instead return a changed value. Dependable and predicible.
Example: return Array.map(arrayToReturn) to map data to an array

Example: or simply return pararm + param to in a simple addition function.

Pure sunction never overwrite the values passedd to them.

Redux reducer function: state mutation functions must be pure functions: takes the previous state and the action passed and returns the next state.
This is an observer and a state machine rolled into one. A single pure function updates state, but is fast because it doesn't change the entire state, just the changes. The rest of the state is passed intact.

When cretaing the reducer, always return the inital stae is if is not yet defined: function counter(state =0, action) {...case statements for state manipulations returns} ours can be 0 because it is simkply a counter.

store (storage center for our state). Binds the state together:

A. Holds current application state B. Dispatches actions C. uses the reducer to tell it what action to perform store is created with const store= createStore(counter); - counter is the reducer function store functions:

A. getState() - return current state

B. store.dispatch ({type:'INCREMENT'}) - to change state of application

C. store.subscribe(() => {call back to update UI of app to reflect application state})

7. render() method subscribes to store and ais called on firts load to set UI store.subscribe(render); to subscribe the store to thye render function

*/

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// the basic app conponent
const Parser = ({value, onParse}) => {
    console.log("value", value);
    console.log("onParse", onParse)
    return(
    <div className="container">
        <h1>Enter Mock json in the Box Below.</h1>
        <textarea placeholder="Drop Mock Json in here! Should start with {feed: [. Do not put in the #if #the #end statements." cols="100" rows="10" id="jsonbox" defaultValue={value.data}></textarea>
        <div><button className="btn btn-primary" onClick={onParse}>Parse it!</button></div>
        <div dangerouslySetInnerHTML={{__html:value.output}}></div>
    </div>
    );
    //should normall sanitize the dangerouslySetInnerHTML first  
    //to prevent XSS bugs - better {['First ', <span>&middot;</span>, ' Second']}
}

//render
const PARSE=1; 
// just sets them, the actual value isn't used in this version. 
//It could be though

const render = () => {
    ReactDOM.render(
        <Parser value={store.getState()}
            onParse={() =>
                store.dispatch({type:PARSE})
            }
        />,
        document.getElementById('root')

    )
}


//reducer for counter
const parser=(state={data:"",output:"output"}, action)=> {
  
    switch (action.type){
        case PARSE: {
            return state=parseJson(state);
            break;
        }
        
        default: {
            return state;
        }
    }

}

function parseJson(state) {
    console.log("parse");
    //this works fine for a simple example, but a react component would be better with onChange
    //for the json box. cab use form onSubmit with Prevent default too. 
    
    var rawJson=document.getElementById('jsonbox').value;
    var returnHtml="";
    var jsonData;
    //if any line befies with "#", this is invalid Json
    var validJson=true;

    //var jsonWhitespaceRemoved=JSON.stringify(JSON.parse(rawJson));
    if (!isJsonString(rawJson)){
        validJson=false;
    }

    if (validJson) {
        returnHtml+="<div>Parsed JSON</div>";
        
        jsonData=JSON.parse(rawJson);
        returnHtml+="<div>Valid Json.</div>";
        if (jsonData.feed){
            var items=jsonData.feed;
            returnHtml+="<div>Number of items: "+items.length+"</div>";
            for (var value of items) {
                if (value.headerline){
                    returnHtml+="<div><h3>"+value.headerline+"</h3></div>";
                }
                if (value.headerImage){
                    returnHtml+='<div><img src="'+value.headerImage+'" width="400"></div>';
                }
                if (value.body){
                    returnHtml+='<div>'+value.body+'</div>';
                }
                if (value.button && value.button.text && value.button.action){
                    returnHtml+='<div><a href="'+value.button.action+'">'+value.button.text+'</a></div>';
                }
              }

             
        }else{
            returnHtml+="<div>No Feed array in Json.</div>"
        }
        

    }else{
        returnHtml+="<div>Invalid Json.</div>";
    }

    return Object.assign({}, state, {output:returnHtml});
    
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        //console.log(e);
        return false;
    }
    return true;
}

//store
const store= createStore(parser); //pass in reducer to store
store.subscribe(render);

render();