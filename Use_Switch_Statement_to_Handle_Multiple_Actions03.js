const {createStore} = require('redux') 
const defaultState = {
    authenticated: false
  };
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
  const authReducer = (state = defaultState, action) => {
  
   switch (action.type) {
      case LOGIN:
        return {
          authenticated: true
        };
      case LOGOUT:
        return {
          authenticated: false
        };
      default:
        return console.log(defaultState);
    }
    
  };
  
  const store = createStore(authReducer);
  
  const loginUser = () => ({type: LOGIN});

  const logoutUser = () => ({type: LOGOUT});
  /***
   * Puoi dire allo store di Redux come gestire più tipi di azione. 
   * Supponiamo che tu stia gestendo l'autenticazione utente nel tuo store Redux. Si desidera avere una rappresentazione dello stato per quando gli utenti sono connessi 
   * e quando sono disconnessi.
   *  Lo rappresenti con un singolo oggetto di stato con la proprietà autenticata. 
   * Hai anche bisogno di creatori di azioni che creino azioni corrispondenti all'accesso e alla disconnessione dell'utente, insieme agli oggetti azione stessi.
   */
