const courses = [
    {
        title: "Angular",
        schedules: [
            { id: 1, totalStudents: 39 },
            { id: 2, totalStudents: 34 },
        ],
    },
    {
        title: "NodeJS",
        schedules: [
            { id: 3, totalStudents: 45 },
            { id: 4, totalStudents: 25 },
        ],
    },
    {
        title: "Microservices",
        schedules: [
            { id: 5, totalStudents: 69 },
            { id: 6, totalStudents: 23 },
        ],
    },
];

console.log("courses", courses)

/* const flat = courses.map(course => {
    const obj = { title: course.title }

    let total = 0
    course.schedules.forEach(schedule => {
        total += schedule.totalStudents
    })

    obj.studentsEnrolled = total

    return obj
})

console.log("flat", flat)

const sort = flat.sort((a, b) => {
    return a.studentsEnrolled > b.studentsEnrolled ? 1 : -1
})

console.log("sort", sort) */

const result =
    courses
        .map(course => {
            const obj = { title: course.title }

            let total = 0
            course.schedules.forEach(schedule => {
                total += schedule.totalStudents
            })

            obj.studentsEnrolled = total

            return obj
        })
        .sort((a, b) => a.studentsEnrolled > b.studentsEnrolled ? 1 : -1)

console.log("result", result)