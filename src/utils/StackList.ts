class Bump{
    data: string;
    next: undefined | Bump;

    constructor(key: string){
        this.data = key;
    }
}


class StackList {
    head: undefined | Bump;

    isEmpty(){
        return this.head == undefined;
    }

    isLastBump(item: Bump){
        return item.next == undefined;
    }

    pushi(item: Bump){
        if(this.isEmpty()){
            this.head = item;
        }else{
            item.next = this.head;
            this.head = item;
        }
    }

    push(str: string): void {
        this.pushi(new Bump(str));
    }

    pop(){
        if(!this.isEmpty()){
            if(this.head && this.head.next) this.head = this.head.next;
        }else{
            console.log("@pop: List already empty");
        }
    }

    peek(){
        return this.head?.data ? this.head.data : undefined;
    }

    print(){
        if(!this.isEmpty()){
           let cur: undefined | Bump = this.head;
           while(cur){
            console.log(cur.data);
            if(this.isLastBump(cur)){
                break;
            }

            cur = cur.next;
           }

        }else{
            console.log("@print: List is empty.");
        }
    }
    
}

export default StackList;