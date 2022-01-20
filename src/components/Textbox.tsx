import { KeyboardEventHandler, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { StoreContext } from "../store/Store";
import { INITIALIZE_TEXT_ACT, POP_UNDO_ACT, PUSH_REDO_ACT, PUSH_UNDO_ACT } from "../store/storeActions";
import StackList from "../utils/StackList";
import { doRedo, doUndo } from "../utils/utils";


const Textbox = () => {
  const textDiv = useRef<null | HTMLDivElement>(null);
  const [state, dispatch] = useContext(StoreContext);
  const [BSdown, setBSdown] = useState(false);
  const [BSTimer, setBSTimer] = useState(0);


  const highlightYellow = (str: string) =>
    `<span class='bg-amber-300 rounded'>${str}</span>`;

  useLayoutEffect(() => {
    
    dispatch({ type: INITIALIZE_TEXT_ACT, payload: textDiv.current });
    //On Load Focus on TextBox
    textDiv.current?.focus();
  }, []);

  useLayoutEffect(() => {
    const searchVal = state.search.dval.trim();

    if (
      textDiv?.current?.innerHTML != undefined &&
      textDiv?.current?.innerText != undefined &&
      textDiv?.current?.innerText != "" &&
      textDiv?.current?.innerHTML != undefined
    ) {
      const defStr = textDiv.current.innerText;
      if (searchVal != " " && searchVal != "") {
        textDiv.current.innerHTML = defStr.replaceAll( searchVal, highlightYellow(searchVal) );
      } else if (!searchVal || searchVal === "") {
        textDiv.current.innerHTML = defStr;
      }
    }
  }, [state.search.dval]);


  const handleKeyUp:KeyboardEventHandler<HTMLDivElement> = (e) => {
    
    const displayText = textDiv.current?.innerText!;
    const betweenKeysDelay = 1000;

    if(e.key == " "){
      dispatch({type: PUSH_UNDO_ACT, payload: displayText});
    }else if(e.key == "Backspace"){
      //Cancel any queued timers
      clearTimeout(BSTimer);
      
      if(textDiv.current?.innerText != ""){
        //Let a snapshot of data be saved with backspace after a certian time has passed
        setBSTimer(setTimeout(() => {setBSdown(false)}, betweenKeysDelay));
      }
    }else if(e.altKey && e.key === "z"){
      doUndo([state, dispatch]);
    }else if(e.altKey && e.key === "y"){
      doRedo([state, dispatch]);
    }

  }

  const handleKeyDown:KeyboardEventHandler<HTMLDivElement> = (e) => {

    const displayText = textDiv.current?.innerText!;

    if(e.key == "Backspace"){
      //When backspace is pressed we save the data present at the moment
      if(textDiv.current?.innerText != ""){
        //console.log("Save BS");
        if(!BSdown){
          dispatch({type: PUSH_UNDO_ACT, payload: displayText});
          setBSdown(true);
        }
      }
    }
  }

  return (
    <div className="w-full h-full flex-auto flex justify-center items-top overflow-x-auto fancyscroll">
      <div
        suppressContentEditableWarning={true}
        contentEditable="true"
        ref={textDiv}
        spellCheck="false"
        className="resize-none outline-none p-2  xs:py-4 xs:px-16 w-full md:w-3/4 h-full whitespace-pre-wrap overflow-x-hidden max-w-[1280px] font-textfont text-sneucolor-150 overflow-y-auto break-words"
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        onPaste={() => doUndo([state, dispatch])}
        onCut={() => doUndo([state, dispatch])}
      >
      </div>
    </div>
  );
};

export default Textbox;
