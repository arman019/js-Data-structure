class HashTable {
    constructor() {
        this.size = 1000;
        this.buckets = Array(1000).fill(null);
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        this.buckets[keyHash] = value;
    }

    get(key) {
        const keyHash = this.hash(key);
        return this.buckets[keyHash];
    }

    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}


class HashTable2 {
    constructor() {
        this.size = 20
        this.buckets = Array(20).fill(null).map(() => [])
    }

    hash(key) {
        let hash = 0
        for (const char of key) {
            hash += char.charCodeAt(0)
            // console.log('char ',char,' hash ',hash)
        }
        //console.log('hash ',hash)

        return hash % this.size
    }

    set(key, value) {
        const keyHash = this.hash(key)
        // this.buckets[hashKey]=value
        //first we need to access every hashKeys element array
        const bucketArray = this.buckets[keyHash]
        //console.log(bucketArray)
        const checkKey = bucketArray.find((element) => {
            return element.key === key
        })

        if (checkKey) {
            bucketArray.val = value
        }
        else {
            bucketArray.push({ key: key, val: value })
        }

    }

    get(key) {
        const hashKey = this.hash(key)
        const bucketArray = this.buckets[hashKey]

        const storedElem = bucketArray.find((elem) => {
            return elem.key === key
        })
        console.log(storedElem)

        return storedElem
    }
    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}


class HashTableTutorial {
    constructor() {
        this.size = 16;
        this.buckets = Array(16)
            .fill(null)
            .map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (const char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((element) => {
            return element.key === key;
        });
        if (storedElement) {
            storedElement.val = value;
        } else {
            bucketArray.push({ key: key, val: value });
        }
    }

    get(key) {
        let res = []
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find(element => {
            if (element.key === key) {
                return element
            }
        });

        return storedElement
    }

    getVal(key) {
        let res = []
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find(element => {
            if (element.key === key) {
                return element.val
            }
        });

        //console.log('storedElement ', storedElement.val)

        return storedElement.val
    }

    showInfo() {
        for (const key in this.buckets) {
            if (this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
}





const word = 'heoooll';

// this also partial  implementaion of max chars
function findFirstRep(str) {
    const table = new HashTableTutorial();
    for (const char of str) {
        if (table.get(char)) {
            table.set(char, table.get(char).val + 1 || 1)
        }
        else {
            table.set(char, 1)
        }

    }

    for (const char of str) {
        console.log(table.getVal(char))
    }

}

//Time Complexity: O(n)

console.log(findFirstRep(word));

