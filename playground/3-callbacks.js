//
// setTimeout(()=>{
//     console.log('two sec are up')
// },2000)
//
// const names= ['adam','someone']
// const shortNames = names.filter((name)=>{
//     return name.length<=4
// })
//
//
// const geocode = (address,callback)=>{
//
// setTimeout(()=>{
//
//     const data = {
//         let:0,
//         longi:0
//     }
//
//     callback(data)
// },2000)
//
// }
//
//
// geocode('NY' ,(data)=>{
//
//     console.log(data)
// })
//

// const add = (x, y, callback) => {
//
//     setTimeout(()=>{
//
//         callback(x+y)
//     },2000)
// }
//
// add(1, 4, (sum) => {
//     console.log(sum)
// })


const doWorkCallback= (callback)=>{

    setTimeout(()=>{
        // callback('error',undefined)
        callback(undefined,[1,5,9])
    },2000)
}


doWorkCallback((error,res)=>{
    if (error){
       return  console.log(error)
    }

    console.log(res)
})

