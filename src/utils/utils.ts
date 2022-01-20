import { Dispatch } from "react";
import { storeAction, storeDataType } from "../store/Store";
import { POP_REDO_ACT, POP_UNDO_ACT, PUSH_REDO_ACT, PUSH_UNDO_ACT } from "../store/storeActions";


export const toggler = (param1: boolean) => {
    if(param1) return false;
    return true;
};

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};



export const doUndo = ([state, dispatch]: [storeDataType, Dispatch<storeAction>]) => {

    const displayText = state.textRef?.innerText;

    dispatch({type: PUSH_REDO_ACT, payload: displayText});
    const lastUndo = state.undo.peek();

    if(state.textRef?.innerText != undefined) state.textRef.innerText = lastUndo ? lastUndo : "";
    dispatch({type: POP_UNDO_ACT});
};

export const doRedo = ([state, dispatch]: [storeDataType, Dispatch<storeAction>]) => {

    const displayText = state.textRef?.innerText;

    if(!state.redo.isEmpty()){
      dispatch({type: PUSH_UNDO_ACT, payload: displayText});
      const lastRedo = state.redo.peek();
      if(state.textRef?.innerText != undefined) state.textRef.innerText = lastRedo ? lastRedo : "";
      dispatch({type: POP_REDO_ACT});
    };
};

/*
Redundant

    const strReplace = (replaceStr: string, startInd: number , replaceSize: number, text: string) => {
        // console.log(text.substring(0,33) + " -> " +  text.substring(33-1, 33+3));
        return (text.substring(0, startInd-1) +  replaceStr + text.substring(startInd+(replaceSize-1)));
    }
    
    const searchHighlight = (str: string, text: string) => {
        const strSize = str.length;
        const textSize = text.length;
        let word = "";
        let newText = text;

        for(let i = 0; i < textSize; i++){
            if(word === str){
                const hightlighted = highlightYellow(word);

                newText = strReplace("<span class='bg-amber-300 px-1 rounded'>${str}</span>", i, strSize, newText);
            }
            
            if(i < textSize){
                word = text.substring(i, i + strSize);
            }else{
                break;
            }
        }

        console.log(newText);
    }

*/