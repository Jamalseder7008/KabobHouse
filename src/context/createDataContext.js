// context and providers day 3 (BenSamuels) Sounds like the professor is giving us pure gold/recipe for pure gold but the class time is cutting short and he has to wait till next time 
import React, {useReducer} from "react";

export default (reducer, actions, initialState) => {
    //builds the context
    const Context= React.createContext();

    //provides information to the children from the reducers
    const Provider = ({children}) =>{

        const [state, dispatch] = useReducer(reducer, initialState);
        
        //actions === {addCartItem : (dispatch) => { return () => {} }}
        const boundActions = {};
        for (let key in actions){
            //key ==='addCartItem
            boundActions[key] = actions[key](dispatch);
        }
    
        return<Context.Provider value={{state: state, ...boundActions}}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider};
};