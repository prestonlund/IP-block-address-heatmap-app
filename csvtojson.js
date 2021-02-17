// convert csv file to json
const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = './GeoLite2-City-Blocks-IPv6.csv'
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        const newArray = [];
        for (let i = 0; i < jsonObj.length; i++) {
            newArray.push([jsonObj[i].latitude, jsonObj[i].longitude]);
        }
        fs.writeFileSync('GeoLite2-City-Blocks-IPv6-lat-lon-min.json', JSON.stringify(newArray), 'utf-8', (err) => {
            if (err) console.log(err)
        })

    })