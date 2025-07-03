const a = [1,2,3];
const total = a.reduce((accumulator,currVal)=>{
    return accumulator+=currVal
})
console.log(total);
