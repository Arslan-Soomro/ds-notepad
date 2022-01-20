import { ChangeEventHandler, FC, MouseEventHandler, useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../store/Store";
import { TOGGLE_MENU_ACT } from "../store/storeActions";
import { doRedo, doUndo, sleep } from "../utils/utils";

const Dropdown = (props: { openFile: ChangeEventHandler<HTMLInputElement>, saveFile: MouseEventHandler<HTMLAnchorElement>, nameFile: string, linkdownload: string }) => {

    //TODO make clicking on other elements close the modal

    const [state, dispatch] = useContext(StoreContext);
    const menuRef = useRef<null | HTMLDivElement>(null);
    const [timer, setTimer] = useState(0);

    const handleMouseIn = () => {
        clearTimeout(timer);
    }

    const handleMouseOut = () => {
        setTimer(setTimeout(() => {
            if(state.dropMenu.isVisible) dispatch({type: TOGGLE_MENU_ACT});
        }, 1000));
    }

    return(
        <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} ref={menuRef} className={`min-w-[120px] absolute right-3 top-10 w-max flex flex-col gap-2 font-textfont text-sneucolor-150 border border-fneucolor-300 px-2 py-2 rounded-lg bg-fneucolor-100 transition-all ${state.dropMenu.isVisible ? "block" : "hidden"}`}>
            {/* <button className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-2 right-2 text-primecolor-100" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button> */}
            <label htmlFor="file-open" className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200 cursor-pointer">Open</label>
            <input type="file" onChange={props.openFile} id="file-open" className="hidden" />
            <a onClick={props.saveFile} download={props.nameFile == "" ? "New.txt" : `${props.nameFile}`} href={props.linkdownload} className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200 cursor-pointer">Save</a>
            <button onClick={() => doUndo([state, dispatch])} className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Undo <span className="text-xs text-fneucolor-300 ml-2">alt + z</span></button>
            <button onClick={() => doRedo([state, dispatch])} className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Redo <span className="text-xs text-fneucolor-300 ml-2">alt + y</span></button>
        </div>
    )
};

export default Dropdown;