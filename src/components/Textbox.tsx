
const Textbox = () => {
    return (
        <div className="w-full h-full flex-auto flex justify-center items-top overflow-x-auto fancyscroll">
            <div contentEditable="true" spellCheck="false" className="resize-none outline-none py-4 px-16 w-full h-fit max-w-[1280px] font-textfont text-sneucolor-150 overflow-y-auto"></div>
        </div>
    )
};

export default Textbox