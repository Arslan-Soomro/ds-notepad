import { KeyboardEventHandler, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { StoreContext } from "../store/Store";
import { INITIALIZE_TEXT_ACT, PUSH_UNDO_ACT } from "../store/storeActions";
import StackList from "../utils/StackList";


const Textbox = () => {
  const textDiv = useRef<null | HTMLDivElement>(null);
  const [state, dispatch] = useContext(StoreContext);
  const [displayText, setDisplayText] = useState("");
  const [timer, setTimer] = useState(0);

  //TODO Create a Whole UNDO REDO STUFF

  const highlightYellow = (str: string) =>
    `<span class='bg-amber-300 rounded'>${str}</span>`;

  useLayoutEffect(() => {
    dispatch({ type: INITIALIZE_TEXT_ACT, payload: textDiv.current });
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

  const pushToUndo = () => {
    if(textDiv?.current?.innerText != undefined){
      dispatch({type: PUSH_UNDO_ACT, payload: displayText});
      setDisplayText(textDiv.current.innerText);
    }
  }

  const handleKeyUp:KeyboardEventHandler<HTMLDivElement> = (e) => {

    //TODO avoid pushing to undo in case of undo and redo shortcuts are caught

    const delayTime = 1000;
    const removeDelayTime = 500;
    clearTimeout(timer);
    
    if(e.key === " "){
      pushToUndo();
    }else{
      setTimer(setTimeout(() => {
        pushToUndo();
      }, e.key == "Backspace" ? removeDelayTime : delayTime));
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
      >
      </div>
    </div>
  );
};

export default Textbox;
