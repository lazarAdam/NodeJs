const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (a < 0 || b < 0){
                return reject('cannot use negative numbers')
            }

            resolve(a + b)

        }, 2000)
    })
}

console.log('doing some normal work.....')

const doWork = async () => {

    console.log('starting some async work....')

   const result = await add(1,99)

   const sum2 =await add(result,50)

    const sum3 = await add(sum2,3)

    return sum3
}

console.log('doing some normal work.....')

doWork().then(res => {
    console.log('result', res)

    console.log('async work is done !')
}).catch(e => {
    console.log('e',e)
})

console.log('normal work is done !')
