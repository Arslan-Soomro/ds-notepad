import { createContext, FC, useReducer } from "react";
import StackList from "../utils/StackList";
import { INITIALIZE_TEXT_ACT, INITIALIZE_SEARCH_ACT, TOGGLE_MENU_ACT, TOGGLE_REPLACE_ACT, UPDATE_REPLACE_ACT, UPDATE_SEARCH_ACT, PUSH_UNDO_ACT, POP_UNDO_ACT, PUSH_REDO_ACT, POP_REDO_ACT, DO_UNDO_ACT, DO_REDO_ACT } from "./storeActions";

export interface storeAction {
    type: string;
    payload?: any;
}

export interface storeDataType{
    dropMenu: {
        isVisible: boolean;
    };
    search: {
        ref: null | HTMLInputElement;
        dval: string;
    };
    replace: {
        isVisible: boolean;
        val: string;
    }
    textRef: null | HTMLDivElement;
    undo: StackList;
    redo: StackList;
}

const initialState: storeDataType = {
    dropMenu : {
        isVisible: false,
    },
    search: {
        ref: null,
        dval: ""
    },
    replace: {
        isVisible: false,
        val: "",
    },
    textRef: null,
    undo: new StackList(),
    redo: new StackList(),
}

// TODO Deal with this, you will have to understand context properly for this
export const StoreContext = createContext<any>(null);

const storeReducer = (state: storeDataType, action: storeAction) => {    
    switch(action.type){
        case TOGGLE_MENU_ACT:
            return {
                ...state,
                dropMenu: {
                    ...state.dropMenu,
                    isVisible: state.dropMenu.isVisible ? false : true,
                }
            };
        case INITIALIZE_SEARCH_ACT:
            if(action.payload){
                return{
                    ...state,
                    search:{
                        ...state.search,
                        ref: action.payload
                    }
                }
            }else{
                return state;
            }
        case INITIALIZE_TEXT_ACT:
            if(action.payload){
                return{
                    ...state,
                    textRef: action.payload
                }
            }else{
                return state;
            }
        case UPDATE_SEARCH_ACT:
            return{
                ...state,
                search:{
                    ...state.search,
                    dval: action.payload ? action.payload : "",
                }
            }
        case TOGGLE_REPLACE_ACT:
            return{
                ...state,
                replace:{
                    ...state.replace,
                    isVisible: state.replace.isVisible ? false : true,
                }
            }
        case UPDATE_REPLACE_ACT:
            return{
                ...state,
                replace:{
                    ...state.replace,
                    val: action.payload ? action.payload : "",
                }
            }
        case PUSH_UNDO_ACT:
            if(action.payload && action.payload != state.undo.peek()) {
                state.undo.push(action.payload);
                //If after undoing redo shouldn't happen with new values
                state.redo.head == null;
            };
            return state
        case PUSH_REDO_ACT:
            if(action.payload && action.payload != state.redo.peek()) state.redo.push(action.payload);
            return state;
        case POP_UNDO_ACT:
            state.undo.pop();
            return state;
        case POP_REDO_ACT:
            state.redo.pop();
            return state;
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