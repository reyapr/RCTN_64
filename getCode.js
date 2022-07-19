const data = require('./peserta.json')

// names = ['lukman hakim', 'WS', 'Dony Dony', 'aristya kusmanugraha']

const studentNames = $$('div[role="listitem"]')
	.map((v, i) => v.children[0].querySelector('span').textContent)
	.filter(name => name!='Renal Apriansyah')
    
const presents = studentNames.map(name => {
    if(data[name]) {
        return data[name].code.match(/(?<=RCTN064ONL).*/)[0].replace(/0+/, '')
    }
    return null
})
const presentForm = presents.sort((a,b) => a-b).join(',')
console.log(presentForm, `<===================  ==================`);