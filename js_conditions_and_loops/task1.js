const averageGrade = 70

if(averageGrade < 60){
    console.log("Незадовільно")
} else if(averageGrade >= 60 && averageGrade <= 70){
    console.log("Задовільно")
} else if(averageGrade > 70 && averageGrade <= 80){
    console.log("Добре")
} else if(averageGrade > 80 && averageGrade <= 90){
    console.log("Дуже добре")
} else if(averageGrade > 90 && averageGrade <= 100) {
    console.log("Відмінно")
} else{
    console.log("Введіть число від 0 до 100")
}
