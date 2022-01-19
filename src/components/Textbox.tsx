import { useLayoutEffect, useRef } from "react";

const Textbox = () => {

    const textDiv = useRef<null | HTMLDivElement>(null);

    const highlightYellow = (str: string) => `<span class='bg-amber-300 px-1 rounded'>${str}</span>`;

    useLayoutEffect(() => {

        /*
        if(textDiv?.current?.innerHTML != undefined){
            const defStr = textDiv.current.innerHTML;
            const strToSearch = "guys";
            textDiv.current.innerHTML = defStr.replaceAll(strToSearch, highlightYellow(strToSearch));

            
            setTimeout(() => {
                if(textDiv?.current?.innerHTML != undefined){

                }
            }, 5000)
        }*/

    }, []);
    

    return (
        <div className="w-full h-full flex-auto flex justify-center items-top overflow-x-auto fancyscroll">
            <div suppressContentEditableWarning={true} contentEditable="true" ref={textDiv} spellCheck="false" className="resize-none outline-none py-4 px-16 w-full h-fit max-w-[1280px] font-textfont text-sneucolor-150 overflow-y-auto">
                Hello World What is up with you guys, you might not know this guys but I am your biggest fan haaha guys, you are lost
            </div>
        </div>
    )
};

export default Textbox