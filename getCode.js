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
    "Louis Gunawan S",
    "M. Arief Hidayat",
    "Muhammad Sidiq Satyaji",
    "Rio Kiswandaru",
    "Septian",
    "tybachri",
    "wahyu komara",
    "Wiwit Setiyo",
    "Yasin Mochamad",
    "Yulius Susilo"
]
const presents = names
    .filter(name => !!data[name])
    .map(name => data[name].code.match(/(?<=RCTN064ONL).*/)[0].replace(/0+/, ''))
const presentForm = presents.sort((a,b) => a-b).join(',')
console.log(presentForm, `<===================  ==================`);
// 2,5,6,7,8,9,10,11,12,13,18,19,20,21,22,23,24,25,26,29,30

