// task1
function roundUP(num) {
    document.write("<h2>task1</h2>")
    document.write(Math.ceil(num))
    document.write("<br> <br>")
}
roundUP(5.1)

//task2
function roundDown(num1) {
    document.write("<h2>task2</h2>")
    document.write(Math.floor(num1))
    document.write("<br> <br>")
}
roundDown(5.9)
//task3
function roundNum(num2) {
    document.write("<h2>task3</h2>")
    document.write(Math.round(num2))
    document.write("<br> <br>")
}
roundNum(5.5)
//task4
function round(number, varieble) {
    document.write("<h2>task4</h2>")
    if (varieble == 1) {
        document.write(Math.round(number))
    } else if (varieble == 2) {
        document.write(Math.ceil(number))
    } else if (varieble == 3) {
        document.write(Math.floor(number))
    } else {
        document.write("<h3>invalid information</h3>")
    }
}
round(5.5, 4)
//task5
function random(x) {
    document.write("<h2>task5</h2>")
    document.write(Math.random())
}
random()
//task6
function getRandomInt(k) {
    document.write("<h2>task6</h2>")
    document.write(Math.random(50) * k);
}
getRandomInt(50)
//task7
function randomBeetwen(mn, mx) {
    document.write("<h2>task7</h2>")
    document.write(Math.random() * (mx - mn + 1) + mn)
}
randomBeetwen(5, 15)
//task8 
function randomNUM(mn1, mx1) {
    document.write("<h2>task8</h2>")
    document.write(Math.round(Math.random() * (mx1 - mn1) + mn1))
}
randomNUM(1, 10)
//task9
function random10NUM(mn2, mx2) {
    document.write("<h2>task9</h2>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
    document.write("<br> <br>")
    document.write(Math.round(Math.random() * (mx2 - mn2) + mn2))
}
random10NUM(1, 10)
//task 10 
function idkAnswer(k) {
    document.write("<h2>task10</h2>")
    document.write("<h1>ver gavige piroba</h1>")
}
idkAnswer(1)
//task11
function weekDays(day1, day2) {
    document.write("<h2>task11</h2>")
    days = Math.round(Math.random() * (day2 - day1) + day1)
    if (days == 1) {
        document.write("<h2>ორშაბათი</h2>")
    } else if (days == 2) {
        document.write("<h2>სამშაბათი</h2>")
    } else if (days == 3) {
        document.write("<h2>ოთხშაბათი</h2>")
    } else if (days == 4) {
        document.write("<h2>ხუთშაბათი</h2>")
    } else if (days == 5) {
        document.write("<h2>პარასკევი</h2>")
    } else if (days == 6) {
        document.write("<h2>შაბათი</h2>")
    } else if (days == 7) {
        document.write("<h2>კვირა</h2>")
    }
}
weekDays(1, 7)
// task12

function randomImages(){
    document.write("<h2>Task 12</h2>")
    arr = ["Photos/code.png", "Photos/developing.jpg", "Photos/applications.webp", "Photos/sky.jpg"]
    m = Math.floor(Math.random() * arr.length )
    document.getElementById("img1").src = arr[m]

}
//task 13
function randomTwoImages(){
    i = 0

    document.write("<h2>Task 13</h2>")
    arr1 = ["Photos/code.png", "Photos/developing.jpg", "Photos/applications.webp", "Photos/silvia.jpg.crdownload",
    "Photos/sky.jpg", "Photos/img1.jpg", "Photos/img2.jpg", "Photos/img3.jpg",
    "Photos/img4.webp", "Photos/img5.jpg", "Photos/img6.jpg", "Photos/img7.webp", "Photos/img8.jpg",
    "Photos/img9.jpg", "Photos/img10.jpg", "Photos/img11.jpg"]


    arr2 = []

    for(i = 0; i < 4; i++){
        n = Math.floor(Math.random() * arr1.length )
        arr2.push(n)
    }

    document.getElementById("img2").src = arr1[arr2[0]]
    document.getElementById("img3").src = arr1[arr2[1]]
    document.getElementById("img4").src = arr1[arr2[2]]
    document.getElementById("img5").src = arr1[arr2[3]]
}

randomTwoImages()

randomImages()
randomImages()
//task 16
function month(q,e){
    document.write("<h2>task16</h2>")
    document.write("shemtxveviti tvis ricxvi " + Math.round(Math.random() * (e - q) + q))
}
month(1,31)

//task 18
function tableWithImage(){
    document.write("<h2>task18</h2>")
    tableArr = ["Photos/code.png", "Photos/developing.jpg", "Photos/applications.webp",
    "Photos/sky.jpg", "Photos/img1.jpg", "Photos/img2.jpg", "Photos/img3.jpg",
    "Photos/img4.webp", "Photos/img5.jpg", "Photos/img6.jpg", "Photos/img7.webp", "Photos/img8.jpg",
    "Photos/img9.jpg", "Photos/img10.jpg", "Photos/img11.jpg"]


    r = Math.floor(Math.random() * tableArr.length)
    document.getElementById("img6").src = tableArr[4]    
}

