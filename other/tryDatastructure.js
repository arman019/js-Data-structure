let arr = [1, 5, 7, 'hello']

/* 

for(let i of arr){
    if(typeof i === 'string'){
        console.log(i)
    }
} */
const stobj = [
    {
        name: "arman",
        game: "dota"
    },
    {
        name: "dd",
        game: "dotad"
    }
    ,
    {
        name: "accrman",
        game: "DDdota"
    }

]

/* stobj.map((obj, i)=>{
    if(obj.game === 'dota'){
        console.log(obj.name,obj.game)
    }
}) */


let str = 'hello my name is arman'

let val = str.replace(/\s+/g, '').trim()
console.log(val)