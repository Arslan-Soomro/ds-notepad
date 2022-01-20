import { FC, useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/Store";
import { sleep } from "../utils/utils";

const Dropdown:FC = () => {

    //TODO make clicking on other elements close the modal

    const [{dropMenu}, dispatch] = useContext(StoreContext);

    return(
        <div className={`min-w-[120px] absolute right-3 top-10 w-max flex flex-col gap-2 font-textfont text-sneucolor-150 border border-fneucolor-300 px-2 py-2 rounded-lg bg-fneucolor-100 transition-all ${dropMenu.isVisible ? "block" : "hidden"}`}>
            {/* <button className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-2 right-2 text-primecolor-100" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button> */}
            <button className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Open</button>
            <button className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Save</button>
            <button className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Undo <span className="text-xs text-fneucolor-300 ml-2">alt + z</span></button>
            <button className="text-sm text-left px-2 py-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Redo <span className="text-xs text-fneucolor-300 ml-2">alt + y</span></button>
            {/*
            <button className="text-sm text-left p-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Find</button>
            <button className="text-sm text-left p-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Select All</button>
            <button className="text-sm text-left p-2 rounded-lg hover:bg-fneucolor-150 active:bg-fneucolor-200">Find and Replace</button>
            */}
        </div>
    )
};

export default Dropdown;