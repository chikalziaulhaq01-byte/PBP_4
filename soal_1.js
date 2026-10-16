let studentsScore = [
    {
        name : 'chikal',
        score: 90
    },
    {
        name : 'Dika',
        score: 80
    },
    {
        name : 'Anmas',
        score: 100
    },
]

let tertinggi = studentsScore[0]

for (let i in studentsScore) {
    if (studentsScore[i].score > tertinggi.score) {
        tertinggi = studentsScore[i]
    }
}

console.log("Siswa dengan nilai paling besar")
console.log("Nama  : " + tertinggi.name)
console.log("Nilai : " + tertinggi.score)
