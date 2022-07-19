const data = require('./peserta.json')
const names = require('./realname.json')
const fs = require('fs')

for(let key in data) {
    data[key].name = names[Number(key)-1]
    data[key].code = data[key].code.replace(/(?<=RCTN064ONL).*/, `00${key}`)
}
