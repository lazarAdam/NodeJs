const util = require('./util')




const address = process.argv[2]


if (!address){
    console.log('please provide an address')
}else{
    util.geocode(address, (error, {lat,longi,location}={}) => {

        if (error) {
            return console.log(error)
        }


        util.forecast(lat,longi, (error, forecastData) => {

            if (error){
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })


}

