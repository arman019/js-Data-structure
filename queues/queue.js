
// linkedlisted queuue
class Queue{
    constructor(){
        this.head = null 
        this.tail = null
        
    }

    enqueue(value){
        const newNode = { value: value, next: this.head }
        this.head = newNode

        if(this.tail === null){
            this.tail = newNode
        }

    }

    dequeue(){
        if(this.head === null)
        {
            return null
        }

        if(this.tail === null){
            return null
        }

        if(this.head === this.tail){
            this.tail=null
            this.head=null
            return
        }
        let currNode = this.head

        while(currNode.next){
            if(currNode.next === this.tail){
                this.tail=currNode
                currNode.next=null
                return
            }
            currNode=currNode.next
        }    
    }

    isEmpty(){
        return this.head === null
    }

    toArray(){
        let list = []
        let startNode = this.head
        while (startNode) {
            list.push(startNode.value)
            startNode = startNode.next
        }

        return list
    }
}

const q = new Queue()

q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.dequeue()
q.dequeue()

console.log(q.toArray())
console.log(q.isEmpty())
 


