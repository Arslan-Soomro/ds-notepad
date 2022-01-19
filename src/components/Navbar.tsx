import { FC, useContext, useState } from "react";
import Dropdown from "./Dropdown";
import { StoreContext } from "../store/Store";
import { TOGGLE_MENU_ACT } from "../store/storeActions";

const Navbar: FC = () => {

    const [state, dispatch] = useContext(StoreContext);

    return(
        <nav className=" bg-fneucolor-100  border-b border-fneucolor-200">
            <div className="flex flex-row px-4 py-2 h-full w-full max-w-[1280px] justify-around items-center">
                <div>
                    <h5 className="inline-block mr-10 font-titlefont text-4xl tracking-tighter text-primecolor-100">ds</h5>
                    <button className="border border-fneucolor-200 py-2 px-4 border-r-0 rounded-tl-lg rounded-bl-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200"><svg className="w-5 h-5 fill-fneucolor-250" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z"/></svg></button>
                    <button className="border border-fneucolor-200 py-2 px-4 rounded-tr-lg rounded-br-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200"><svg className="w-5 h-5 fill-fneucolor-250" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.115 3.515c4.617-4.618 12.056-4.676 16.756-.195l2.129-2.258v7.938h-7.484l2.066-2.191c-2.82-2.706-7.297-2.676-10.073.1-4.341 4.341-1.737 12.291 5.491 12.291v4.8c-3.708 0-6.614-1.244-8.885-3.515-4.686-4.686-4.686-12.284 0-16.97z"/></svg></button>
                </div>
                <div className="hidden md:flex max-w-[500px] gap-2 items-center">
                    <input placeholder="Search" className="text-base h-fit border border-fneucolor-200 py-1 px-3 rounded-lg w-full font-textfont text-sneucolor-200" />
                    <button className="m-2 py-1 px-3 transition rounded-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200 border border-fneucolor-200 text-primecolor-100 font-titlefont">R</button>
                </div>
                <div className="font-textfont">
                    <button className="m-2 py-1 px-3 transition rounded-lg bg-primecolor-100 hover:bg-primecolor-150 active:bg-primecolor-200 text-fneucolor-100">Save</button>
                    <button className="m-2 py-1 px-3 transition rounded-lg bg-fneucolor-100 hover:bg-fneucolor-150 active:bg-fneucolor-200 border border-fneucolor-250 text-sneucolor-200">Open</button>
                    <div className="relative inline-block">
                        <svg onClick={() => dispatch({type: TOGGLE_MENU_ACT})} xmlns="http://www.w3.org/2000/svg" className="m-2 h-7 w-7 cursor-pointer inline-block text-primecolor-100 hover:text-primecolor-150 active:text-primecolor-200" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                        <Dropdown />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;