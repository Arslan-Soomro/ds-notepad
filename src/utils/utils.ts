export const toggler = (param1: boolean) => {
    if(param1) return false;
    return true;
};

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
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