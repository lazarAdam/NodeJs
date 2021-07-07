const name = 'adam'
const useAge = 27

const user={
    name,
    age:useAge,
    location:'MN'
}

console.log(user)


const product  ={
    label:'red note book',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.2
}

// // object destructuring
// const {label:productLabel,stock,rating} = product
//
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label,stock})=>{
    console.log(type,label,stock)
}

transaction('order',product)