const data = require('./peserta.json')



// const studentNames = $$('div[role="listitem"]')
// 	.map((v, i) => v.children[0].querySelector('span').textContent)
// 	.filter(name => name!='Renal Apriansyah')
studentNames = [
    "adam wahidin",
    "adi guna",
    "Ahmad Romadhon",
    "Ali Suswanto",
    "alif ramadhan",
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
    "M. Arief Hidayat",
    "Muhammad Sidiq Satyaji",
    "Septian",
    "Sonita Veronica Barus",
    "tybachri",
    "ucupcup 21",
    "vicky fernandi",
    "victor as",
    "wahyu komara",
    "Wiwit Setiyo",
    "Yasin Mochamad",
    "Yulius Susilo"
]
const presents = studentNames
.filter(name => !!data[name])
.map(name => {
    return data[name].code.match(/(?<=RCTN064ONL).*/)[0].replace(/0+/, '')
})
const presentForm = presents.sort((a,b) => a-b).join(',')
console.log(presentForm, `<===================  ==================`);