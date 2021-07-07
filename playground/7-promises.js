// const doWorkPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve([1,7,9])
//         reject('error occured!')
//     },2000)
// })
//
// doWorkPromise.then((result)=>{
//     console.log('Success',result)
// }).catch((error)=>{
//     console.log('error',error)
// })


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(a + b)

        }, 2000)
    })
}

// nested promise chaining (not recommended)

// add(1, 2)
//     .then(sum => {
//         console.log(sum)
//
//         add(sum, 5)
//             .then(sum => {
//                 console.log(sum)
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     })
//     .catch(e => {
//         console.log(e)
//     })


// promise chaining (recommended approach)
add(1, 1).then(sum => {
    console.log(sum)

    return add(sum, 4)
})
    .then(sum2 => {
        console.log(sum2)

        return add(sum2, 5)
    })
    .then(sum3 => {
        console.log(sum3)
    })
    .catch(e => {
        console.log(e)
    })
