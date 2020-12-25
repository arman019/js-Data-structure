// The functionality of Objects

const obj = {
    firstName:'Arman',
    age:31,
    greet(){
        console.log('Hello '+this.firstName)
    }
}

//console.log(obj)
//console.log(obj.greet())

obj.lastName = 'Enzo'
//console.log(obj)

delete obj.lastName
console.log(obj)

// To iterate we use For in loop

