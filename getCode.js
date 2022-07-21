const data = require('./peserta.json')



// const studentNames = $$('div[role="listitem"]')
// 	.map((v, i) => v.children[0].querySelector('span').textContent)
// 	.filter(name => name!='Renal Apriansyah')
names = [
    "adam wahidin",
    "adi guna",
    "Ahmad Romadhon",
    "Ali Suswanto",
    "alif ramadhan",
    "Arief Hidayat",
    "aristya kusmanugraha",
    "Dony Dony",
    "Fadillah Maulana",
    "Farid Hakim",
    "Farid Rahmat",
    "Felix Hendrian",
    "Geoffrey Laurens",
    "kenny adam",
    "Louis Gunawan S",
    "lukman hakim",
    "Muhammad Sidiq Satyaji",
    "Septian",
    "Sonita Veronica Barus",
    "tybachri",
    "vicky fernandi",
    "victor as",
    "wahyu komara",
    "Wiwit Setiyo",
    "Yasin Mochamad",
    "Yulius Susilo"
]
const presents = names
    .filter(name => !!data[name])
    .map(name => {
        return data[name].code.match(/(?<=RCTN064ONL).*/)[0].replace(/0+/, '')
    })
const presentForm = presents.sort((a,b) => a-b).join(',')
console.log(presentForm, `<===================  ==================`);
// 1,2,3,4,5,6,7,8,9,10,11,13,14,15,17,18,19,20,21,23,24,25,26,27,28,29,30
