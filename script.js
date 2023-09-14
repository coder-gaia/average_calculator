const form = document.getElementById("form-lesson")
const minimumGrade =parseFloat(prompt("Insert the minimum grade cut:"))
const successImg = `<img src="./images/aprovado.png" alt="happy emote"/>`
const flawImg = `<img src="./images/reprovado.png" alt="sad emote"/>`
const spanApproved = `<span class="result approved">Approved</span>`
const spanFlunked = `<span class="result flunked">Flunked</span>`
const lessons = []
const grades = []

let rows = " "

form.addEventListener("submit", function(e){

    e.preventDefault()

    addRow()
    updateTable()
    updateFinalGrades()
})

function addRow(){
    const inputLessonTitle = document.getElementById("lesson-title")
    const inputLessonGrade = document.getElementById("lesson-grade")


    if(lessons.includes(inputLessonTitle.value)){
        alert (`The ${inputLessonTitle.value} already exists!`)

    }else{
    lessons.push(inputLessonTitle.value)
    grades.push(parseFloat(inputLessonGrade.value))

     let row = `<tr>`
     row += `<td>${inputLessonTitle.value}</td>`
     row += `<td>${inputLessonGrade.value}</td>`
     row += `<td>${inputLessonGrade.value >= minimumGrade  ?  successImg : flawImg}</td>`
     row += `</tr>`

    rows += row
    }

    inputLessonTitle.value = ''
    inputLessonGrade.value  = ''
}

function updateTable(){
    const tBody = document.querySelector("tbody")
    tBody.innerHTML = rows
}

function updateFinalGrades(){
        const finalAverage = calculatesFinalAverage()

        document.getElementById("final-average-value").innerHTML = finalAverage.toFixed(2)
        document.getElementById("final-average-result").innerHTML = finalAverage >= minimumGrade ? spanApproved : spanFlunked
}

function calculatesFinalAverage(){
    let gradesSum = 0

    for(let i = 0; i  < grades.length; i++){
        gradesSum += grades[i]
    }
        return gradesSum / grades.length
}