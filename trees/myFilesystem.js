//this is a practice filesystem of the main one

class Node {
    constructor(value, parentNode = '') {
        this.vlaue = value
        this.children = []
        this.parent = parentNode
    }

    addNode(value) {
        const segment = value.trim().split('/')
        if(segment.length === 0){
            return
        }
        if(segment.length === 1){
            const node = new Node(value, this)
            this.children.push(node)
            return { node: node, index: this.children.length - 1 }
        }

        const exsistPath = this.children.find((child)=>{
            return child.value === segment[0]
        })

        if(exsistPath){
            this.addNode (segment.slice(1).join('/'))
        }else{
            const node = new Node(segment[0], this)
           // node.addNode(segment.slice(1).join('/')) 
            console.log(node.addNode(segment.slice(1).join('/')) )    
            this.children.push(node)
            return { node: node, index: this.children.length - 1 } 
        }
        
    }


    removeNode(value){
        const segment = value.trim().split('/')
        if (segment.length === 0) {
            return
        }
        if (segment.length === 1) {
            const node = new Node(value, this)
            this.children.push(node)
            return { node: node, index: this.children.length - 1 }
        }
    }


}

class Tree {
    constructor(root) {
        this.root = new Node(root)
    }

    add(path){
        this.root.addNode(path)
    }

    remove(path){
        this.root.removeNode(path)
    }
}

const fileSystem = new Tree('/')

const documentNode= fileSystem.root.addNode('document/important/tax.txt')
//const gameNode = fileSystem.root.addNode('game/fav/cod.exe')


console.log(documentNode)