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
    "Lutfi Dwimulya",
    "M. Arief Hidayat",
    "Muhammad Sidiq Satyaji",
    "Rio Kiswandaru",
    "Septian",
    "Sonita Veronica Barus",
    "tybachri",
    "ucupcup 21",
    "vicky fernandi",
    "wahyu komara",
    "Wiwit Setiyo P",
    "Yasin Mochamad",
    "Yulius Susilo"
]
// studentNames = ['adam wahidin', 'adi guna', 'Ahmad Romadhon', 'Ali Suswanto', 'alif ramadhan', 'aristya kusmanugraha', 'Bayu Rmk', 'Dony Dony', 'Fadillah Maulana', 'Farid Hakim', 'Farid Rahmat', 'Felix Hendrian', 'Geoffrey Laurens', 'kenny adam', 'Louis Gunawan S', 'Lutfi Dwimulya', 'M. Arief Hidayat', 'Muhammad Sidiq Satyaji', 'Rio Kiswandaru', 'Septian', 'Sonita Veronica Barus', 'tybachri', 'ucupcup 21', 'vicky fernandi', 'wahyu komara', 'Wiwit Setiyo P', 'Yasin Mochamad', 'Yulius Susilo']
const presents = studentNames
.filter(name => !!data[name])
.map(name => {
    return data[name].code.match(/(?<=RCTN064ONL).*/)[0].replace(/0+/, '')
})
const presentForm = presents.sort((a,b) => a-b).join(',')
console.log(presentForm, `<===================  ==================`);
// 1,2,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30