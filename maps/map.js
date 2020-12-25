const val = new Map()

val.set('b',10)

//console.log(val.get('b'))

const germany = {name:'germany', area:'eu'}

val.set(germany,0.83)


//console.log(val.get(germany))

for (const el of val) {
    console.log(el)
}
val.delete(germany)
//console.log(val.get(germany))