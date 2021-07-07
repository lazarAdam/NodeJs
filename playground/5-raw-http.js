const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=3b838f7eb309d1d37b195c1c0f2738d8&query=45,-75&units=f`;

const request = http.request(url,(resp)=>{

    let data = ''


    resp.on('data',(chunk)=>{
       data = data + chunk.toString()
    })

    resp.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})


request.on('error',(error)=>{
    console.log("An error",error)
})
request.end()