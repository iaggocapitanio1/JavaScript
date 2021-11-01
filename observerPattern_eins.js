const manufacturers = ["Mercedes", "Audi", "BMW"];

function print(name, index){
console.log(`${index +1}. ${name}`)
}

manufacturers.forEach(print)
// manufacturers.forEach(function(a){
//     console.log(a)
// })
manufacturers.forEach(manufacturer => console.log(manufacturer))

// Call back second part 

// Without callback method 
const grades = [7.7, 6, 6.5, 8.5, 6.7 , 9, 10 ,0.5, 5, 10]

let lowGrades= []
for (let index in grades){
    if (grades[index] < 7){
        lowGrades.push(grades[index])
    }
}
console.log(`The low grades are: ${lowGrades}`)

// With call back 
lowGrades_2 = grades.filter((grade)=> grade<7)

console.log(`The low grades are: ${lowGrades_2}`)