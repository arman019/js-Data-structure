//this is a practice filesystem of the main one

class Node {
    constructor(value, parentNode = '') {
        this.value = value
        this.children = []
        this.parent = parentNode
    }

    addNode(value) {
        const node = new Node(value, this)
        this.children.push(node)
        return { node: node, index: this.children.length - 1 }
    }

    removeNode(value) {

    }


}

class Tree {
    constructor(root) {
        this.root = new Node(root)
    }

    add(path) {
        this.root.addNode(path)
    }

    remove(path) {
        this.root.removeNode(path)
    }

    checkTree(givenNode, value) {
        const exsistNode = this.root.children.find((elem) => elem.value === givenNode.node.value)

        if (exsistNode) {
            for (let i = 0; i < value.length; i++) {
                givenNode.node.addNode(value[i])
            }
        }
        else {
            throw new Error('Undefined path')
        }

        // console.log(node.node.value)
        // console.log(this)
    }

    addNodeInChildNode(parent, child,value) {
        const exsistNode = this.root.children.find((elem) => elem.value === parent.node.value)

        if (exsistNode) {
            const exsistChild = parent.node.children.findIndex((elem) => elem.value === child)
            if (exsistChild >=0) {
                console.log(parent.node.children[exsistChild].addNode(value))
            }
        }
    }
}

const fileSystem = new Tree('a')

const documentNode = fileSystem.root.addNode('b')
const gameNode = fileSystem.root.addNode('c')
//const gameNode = fileSystem.root.addNode('game/fav/cod.exe')
documentNode.node.addNode('d')
documentNode.node.addNode('e')

//console.log(documentNode.node)
console.log(fileSystem.checkTree(gameNode, ['f', 'g', 'h']))
console.log(fileSystem.addNodeInChildNode(gameNode, 'h','i'))

console.log(fileSystem)