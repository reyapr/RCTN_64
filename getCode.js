const data = require('./peserta.json')



// const studentNames = $$('div[role="listitem"]')
// 	.map((v, i) => v.children[0].querySelector('span').textContent)
// 	.filter(name => name!='Renal Apriansyah')
names = [
    "adam wahidin",
    "Ahmad Romadhon",
    "Ali Suswanto",
    "aristya kusmanugraha",
    "Dony Dony",
    "Fadillah Maulana",
    "Farid Hakim",
    "Geoffrey Laurens",
    "kenny adam",
    "Louis Gunawan S",
    "M. Arief Hidayat",
    "Muhammad Sidiq Satyaji",
    "Rio Kiswandaru",
    "Septian",
    "vicky fernandi",
    "Yasin Mochamad",
    "Yusup Supriyadi"
]
const presents = names
    .filter(name => !!data[name])
    .map(name => data[name].code.match(/(?<=RCTN064ONL).*/)[0].replace(/0+/, ''))
const presentForm = presents.sort((a,b) => a-b).join(',')
console.log(presentForm, `<===================  ==================`);
// 2,5,6,7,9,10,13,18,19,20,21,22,24,25,26,28,29

