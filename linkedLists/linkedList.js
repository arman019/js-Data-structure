class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    append(value) {
        const newNode = { value: value, next: null }
        if (this.head === null) {
            //console.log('here')
            this.head = newNode
        }

        if (this.tail !== null) {
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    prePend(val) {
        /*  
          my way
        let temp = this.head
          if (temp) {
              const newNode = { value: val, next: null }
              if (this.head !== null) {
                  this.head = newNode
  
              }
              this.head.next = temp
  
          }
          else{
              return 'Unhandled insertion'
          } */

        //tutorials way

        const newNode = { value: val, next: this.head }

        this.head = newNode

        if (this.tail === null) {
            this.tail = newNode
        }
    }

    insertAfter(value, afterValue){
        const val = this.find(afterValue)

        if(val){
            let checkNext = val.next
            let newNode = {value:value,next:checkNext}
            val.next = newNode
        }

        else{
            return null
        }

    }

    find(value) {
        if(this.head === null){
            return null
        }

        let currNode =this.head

        while(currNode){
            if(currNode.value === value){
                return currNode
            }
            currNode = currNode.next
        }

        return null
    }


    deleteValue(value) {
        if (!this.head) {
            return null
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }

        let currNode = this.head
        while (currNode.next) {

            if (value === currNode.next.value) {
                currNode.next = currNode.next.next
            }
            else {
                currNode = currNode.next
            }
        }

        if (this.tail.value === value) {
            this.tail = currNode
        }

      

    }

    arrayForm() {
        let listArr = []
        let startNode = this.head
        while (startNode) {
            listArr.push(startNode)
            startNode = startNode.next
        }

        return listArr
    }






}



const list = new LinkedList()
list.append('Omegalul')
list.append(6)
list.append(8)
list.append('hello there')
list.append(true)
list.append(8)
list.append(5)

list.deleteValue(5)

// console.log(list.arrayForm())
/* 
console.log(list.find('hello there'))
console.log(list.find('Max')) */

list.insertAfter(11,'hello there')
console.log(list.arrayForm())