const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2e413a7fd5a48804aaf5004bf43441c5&query=${latitude},${longtitude}`

    request( { url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Please try again', undefined)
        } else { 
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} 
            degrees out. It feels like ${response.body.current.feelslike} degrees out. The humidity is ${response.body.current.humidity}%.`)
        }
    })
}

module.exports = forecast