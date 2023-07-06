class Stack {
    constructor(){
        this.items = []
    }
    
    push(thing){
        this.items.push(thing);
        console.log("Pushing....", thing)
    }
    
    pop(){
        if (this.items.length > 0){
            const item = this.items.pop();
            console.log("Poppping....", item);
        } else {
            console.log("Stack is currently empty")
        }
        
    }
    
    check(){
        console.log("Checking stack....", this.items)
    }
    
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()
stack.pop()
stack.check()
stack.pop()
stack.check()
stack.pop()