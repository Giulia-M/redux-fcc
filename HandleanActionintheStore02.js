const {createStore} = require('redux') 


// 6 lezione Handle an Action in the Store
const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    console.log(action.type, "ciao")
    if(action.type == 'LOGIN') {
        return {login:true}
    } else {
      return state;
    }
    
  
  };
  
  const store = createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };