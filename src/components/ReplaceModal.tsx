import { ChangeEventHandler, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { storeAction, StoreContext, storeDataType } from "../store/Store";
import { TOGGLE_REPLACE_ACT, UPDATE_REPLACE_ACT, UPDATE_SEARCH_ACT } from "../store/storeActions";


const ReplaceModal = () => {

    const [state, dispatch]: [storeDataType, Function] = useContext(StoreContext);
    const replaceInputRef = useRef<null | HTMLInputElement>(null);

    const replaceClickHandler = () => {
        dispatch({
            type: UPDATE_REPLACE_ACT,
            payload: replaceInputRef?.current?.value ? replaceInputRef.current.value : ""
        })
    };

    useEffect(() => {
        if(state.replace.val != undefined && state.search.dval != undefined){
            const replaceVal = state.replace.val.trim();
            const searchVal = state.search.dval.trim();
            if(replaceVal != "" && searchVal != "" && state.textRef){
                state.textRef.innerHTML = state.textRef.innerText.replaceAll(searchVal, replaceVal);
                if(state.search.ref?.value) state.search.ref.value = ""; 
                dispatch({
                    type: TOGGLE_REPLACE_ACT
                });
                dispatch({
                    type: UPDATE_REPLACE_ACT,
                    payload: "",
                })

            }
        };
    }, [state.replace.val])

    return(
        <div className="w-full h-full absolute flex justify-center items-center bg-[#0000001f]">
            {/* The Actual Modal */}
            <div className="relative bg-fneucolor-100 overflow-hidden bg-fneucolor border border-fneucolor-250 max-w-[600px] max-h-[350px] font-textfont rounded-lg">
                <div className="relative border-b flex justify-between px-5 py-3">
                    <p className="font-textfont text-primecolor-100">Replace</p>
                    <button onClick={() => dispatch({type: TOGGLE_REPLACE_ACT})}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primecolor-100 hover:text-primecolor-150 active:text-primecolor-200" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>
                <div className="p-8">
                    {/* <p className="mx-2 mb-1 text-sneucolor-250">Replace With</p> */}
                    <input ref={replaceInputRef} placeholder="replace with" className="text-base h-fit border border-fneucolor-200 py-3 px-3 rounded-lg w-full font-textfont text-sneucolor-200" />
                </div>
                <button onClick={replaceClickHandler} className="border-t border-fneucolor-250 w-full p-3 font-headingfont text-primecolor-100 text-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Replace</button>
            </div>
        </div>
    
    )
}

export default ReplaceModal;