const studentsMen = ["Luis", "Carlos", "Alfonso"]
const studentsWomen = ["Claudia", "Alejandra", "Camila", "Rosa"]

const studentsTotal = studentsMen.concat(studentsWomen)

console.log("studentsTotal", studentsTotal)

const students = [...studentsMen, ...studentsWomen]

console.log("students", students)