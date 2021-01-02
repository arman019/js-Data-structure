class Node {
    constructor(value,parentNode = null){
        this.children =[]
        this.value = value
        this.parent = parentNode
    }

    addNode(value) {
        const node = new Node(value,this)
        this.children.push(node)

        return {node:node , index:this.children.length- 1}
    }

    removeNode(index) {
        return this.children.splice(index,1)
    }
}

class Tree {
    constructor(rootValue){
        this.root = new Node(rootValue)
    }
    


}

const fileSystem = new Tree('/')

const documentNode = fileSystem.root.addNode('/documents')
const gameNode = fileSystem.root.addNode('/games')

// console.log(documentNode.node)

 documentNode.node.addNode('/tax.txt')
gameNode.node.addNode('/code.exe') 
console.log(fileSystem) 

