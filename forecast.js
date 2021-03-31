const request = require('request')

const forecast= (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=05c34408ebbab58d655002039fa32a75&query='+latitude+','+longitude+'&units=m'

    request({url:url, json:true}, (error,response)=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
           callback(undefined, 'It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}
module.exports = forecast