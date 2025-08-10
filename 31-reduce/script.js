const salesByWeek = [
    {
        week: 1,
        sales: 2000
    },
    {
        week: 2,
        sales: 2200
    },
    {
        week: 3,
        sales: 4500
    },
    {
        week: 4,
        sales: 3200
    },
    {
        week: 5,
        sales: 1220
    }
]

let total = 0

for (let index = 0; index < salesByWeek.length; index++) {
    total += salesByWeek[index].sales
}

console.log("Sales Monthly", total)

/* const totalSales = salesByWeek.reduce((total, el) => {
    total += el.sales
    return total
}, 0) */

const totalSales = salesByWeek.reduce((total, el) => total + el.sales, 0)

console.log("Total with reduce", totalSales)

const salesBooksByBookcase = [
    { local: "Bookcase1", title: "Javascript", sales: 3000 },
    { local: "Bookcase2", title: "Angular", sales: 4500 },
    { local: "Bookcase3", title: "NodeJS", sales: 1600 },
    { local: "Bookcase4", title: "Javascript", sales: 1800 },
    { local: "Bookcase5", title: "Angular", sales: 3200 },
    { local: "Bookcase1", title: "Docker", sales: 9000 },
    { local: "Bookcase3", title: "Kubernetes", sales: 7500 },
]

const salesByBook = salesBooksByBookcase.reduce((total, el) => {
    if (total[el.title]) {
        total[el.title] += el.sales
    } else {
        total[el.title] = el.sales
    }

    return total
}, {})
// {Angular: 7700, Javascript: 4800, NodeJS: 1600, Docker: 9000, Kubernetes: 7500}

console.log("salesByBook", salesByBook)

const reportBookByBookcase = salesBooksByBookcase.reduce((total, el) => {
    /*     if (total[el.title]) {
            if (total[el.title][el.local]) {
                total[el.title][el.local] += el.sales
            } else {
                total[el.title][el.local] = el.sales
            }
        } else {
            total[el.title] = {}
            total[el.title][el.local] = el.sales
        } */

    /*     if (total[el.title] && total[el.title][el.local]) {
            total[el.title][el.local] += el.sales
        } else if (total[el.title] && !total[el.title][el.local]) {
            total[el.title][el.local] = el.sales
        } else {
            total[el.title] = {}
            total[el.title][el.local] = el.sales
        } */


    const existsTitle = total[el.title]

    if (existsTitle) {
        const existsTitleInBookcase = total[el.title][el.local]
        if (existsTitleInBookcase) { total[el.title][el.local] += el.sales }
        else { total[el.title][el.local] = el.sales }
    } else {
        total[el.title] = {}
        total[el.title][el.local] = el.sales
    }

    return total
}, {})
console.log("reportBookByBookcase", reportBookByBookcase)

const students = [
    { name: "Luis", lastname: "Ramirez" },
    { name: "Carlos", lastname: "Espinoza" },
    { name: "Johan", lastname: "Espinoza" },
    { name: "Rodrigo", lastname: "Santibañez" },
    { name: "Sergio", lastname: "Ramirez" },
    { name: "Rodrigo", lastname: "Guadalupe" },
    { name: "Rodrigo", lastname: "Espinoza" }
]

const uniqueNames = students.reduce((list, el) => {
    if (!list.includes(el.name)) {
        list.push(el.name)
    }

    return list
}, [])
console.log("uniqueNames", uniqueNames)

const quantityByName = students.reduce((total, el) => {
    if (total[el.name]) {
        total[el.name]++
    } else {
        total[el.name] = 1
    }

    return total
}, {})
console.log("quantityByName", quantityByName)

const quantityByLastname = students.reduce((total, el) => {
    if (total[el.lastname]) {
        total[el.lastname]++
    } else {
        total[el.lastname] = 1
    }

    return total
}, {})
console.log("quantityByLastname", quantityByLastname)