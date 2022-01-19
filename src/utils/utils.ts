export const toggler = (param1: boolean) => {
    if(param1) return false;
    return true;
};

export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};