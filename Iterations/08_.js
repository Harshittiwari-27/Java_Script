const myNums=[1,2,3,4,5]
const intialValue =0;

// const myTotal =myNums.reduce(function (acc,curval) {
//     console.log(`acc :${acc} and currval: ${curval}`);
    
//     return acc+curval
// },0)

// console.log(myTotal);


const myTotal=myNums.reduce((acc,curval)=> acc+curval,0)
console.log(myTotal);


const shoppingCart= [
    {
        itemName :"js course ",
        price :2999
    },
     {
        itemName :"mobile dev course ",
        price :5999
    },
     {
        itemName :"data science course ",
        price :12999
    },
     {
        itemName :"js course ",
        price :2999
    }
]
const i=0;

const toatal=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(toatal);

