class Node {
    constructor(value, parentNode = null) {
        this.children = []
        this.value = value
        this.parent = parentNode
    }

    addNode(value) {
        const segment = value.trim().split('/')
        if (segment.length === 0) {
            return
        }

        if (segment.length === 1) {
            const node = new Node(segment[0], this)
            this.children.push(node)
            return { node: node, index: this.children.length - 1 }
        }

        const exsistChild = this.children.find((child) => {
            return child.value === segment[0]
        })
        if (exsistChild) {
            exsistChild.addNode(segment.slice(1).join('/'))
        }
        else {
            const node = new Node(segment[0], this)
            node.addNode(segment.slice(1).join('/'))
            this.children.push(node)
            return { node: node, index: this.children.length - 1 }
        }


    }

    removeNode(value) {
        const segment = value.trim().split('/')
        if (segment.length === 0) {
            return
        }

        if (segment.length === 1) {
            const exsistingNodeIndex = this.children.findIndex((child) => child.value === segment[0])
            console.log(exsistingNodeIndex)
            if (exsistingNodeIndex < 0) {
                throw new Error('incorrect removal')
            }

            return this.children.splice(exsistingNodeIndex)
        }

        if (segment.length > 1) {

            const exsistChildNode = this.children.find((child) => {
                return child.value === segment[0]
            })

            console.log('child ', exsistChildNode)

            if (!exsistChildNode) {
                throw new Error('incorrect pathing ' + segment[0])

            }
            exsistChildNode.removeNode(segment.slice(1).join('/'))

        }

    }

    findNode(value) {
         console.log(this)
       
        //console.log('1')
        for (const child of this.children) {
            if(child.value === value){
                 return child
            }
            const nestedChildNode = child.findNode(value);
            if (nestedChildNode) {
                return nestedChildNode;
            }
        }
    }




}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue)
    }

    add(path) {
        this.root.addNode(path)

    }
    remove(path) {
        this.root.removeNode(path)
        //console.log(this.root.removeNode(path))
    }

    find(value) {
        if (this.root.value === value) {
            return this.root
        }
        // console.log('here')
        return this.root.findNode(value)
    }





}

const fileSystem = new Tree('/')
fileSystem.add("documents/task/Text.txt")
fileSystem.add("documents")
fileSystem.add("Roll/documents/code.exe")
/* fileSystem.add("documents/documents/code.exe")
fileSystem.add("documents/documents/cll.exe") */
/* fileSystem.add("documents/documents/code.exe")
fileSystem.add("documents/documents/code.exe/bin.jar") */
// fileSystem.remove("documents/documents/code.exe/bin.jar") 

// fileSystem.remove("documents")


console.log(fileSystem.find('code.exe'))

//console.log(fileSystem.add("documents/documents/Text.txt"))
console.log(fileSystem)

