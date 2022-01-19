import { createContext, FC, useReducer } from "react";
import { TOGGLE_MENU_ACT } from "./storeActions";

export const StoreContext = createContext<any>(undefined);

interface storeAction {
    type: string;
    payload: any;
}

interface storeDataType{
    dropMenu: {
        isVisible: boolean;
    }
}

const initialState = {
    dropMenu : {
        isVisible: false,
    }

}

const storeReducer = (state: storeDataType, action: storeAction) => {    
    switch(action.type){
        case TOGGLE_MENU_ACT:
            console.log("Toggle");
            return {
                ...state,
                dropMenu: {
                    ...state.dropMenu,
                    isVisible: state.dropMenu.isVisible ? false : true,
                }
            };
        default:
            return state;
    }
}

export const Store:FC = ({children}) => {

    const [state, dispatch] = useReducer(storeReducer, initialState);

    return(
        <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
    )
}