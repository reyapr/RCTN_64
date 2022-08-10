const data = require('./peserta.json')



// const studentNames = $$('div[role="listitem"]')
// 	.map((v, i) => v.children[0].querySelector('span').textContent)
// 	.filter(name => name!='Renal Apriansyah')
names = [
    "adam wahidin",
    "adi guna",
    "Ahmad Romadhon",
    "alif ramadhan",
    "aristya kusmanugraha",
    "Fadillah Maulana",
    "Farid Hakim",
    "Farid Rahmat",
    "Geoffrey Laurens",
    "kenny adam",
    "Louis Gunawan S",
    "M. Arief Hidayat",
    "Muhammad Sidiq Satyaji",
    "Rio Kiswandaru",
    "Septian",
    "vicky fernandi",
    "wahyu komara",
    "Wiwit Setiyo",
    "Yasin Mochamad",
    "Yulius Susilo",
    "Yusup Supriyadi"
]
const presents = names
    .filter(name => !!data[name])
    .map(name => data[name].code.match(/(?<=RCTN064ONL).*/)[0].replace(/0+/, ''))
const presentForm = presents.sort((a,b) => a-b).join(',')
console.log(presentForm, `<===================  ==================`);
// 1,2,5,7,8,9,10,11,13,15,18,19,20,21,22,23,24,25,26,27,29
