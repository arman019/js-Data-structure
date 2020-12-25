
const LinkedList = require('../linkedLists/linkedList');




class Stack{
    constructor() {
        this.list = new LinkedList()
        
    }

    push(value){
        this.list.prePend(value)
    }
    
    pop(){
        return this.list.deleteHead()
    }
    isEmpty(){
        return this.list.head === null
    }

    toArray(){
        return this.list.arrayForm()
    }
}

 const st = new Stack()
st.push(4)
st.push(7)
st.pop()

console.log(st.isEmpty())

console.log(st.toArray()) 