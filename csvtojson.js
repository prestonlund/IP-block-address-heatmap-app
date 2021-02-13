// convert csv file to json
const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = './GeoLite2-City-Blocks-IPv4.csv'
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        const newArray = [];
        for (let i = 0; i < jsonObj.length; i += 2) {
            newArray.push([jsonObj[i].latitude, jsonObj[i].longitude]);
        }
        fs.writeFileSync('GeoLite2-City-Blocks-IPv4-lat-lon-min-2.json', JSON.stringify(newArray), 'utf-8', (err) => {
            if (err) console.log(err)
        })

    })