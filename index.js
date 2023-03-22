//this is Task1

function writeText(s) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task1" + "</p>")
    document.write("<p class='p1'>" + s + "</p>")
    document.write("<br>")
}

writeText('JavaScript')


//this is Task2

function sum(x, y) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task2" + "</p>")
    document.write(x + y)
    document.write("<br>")
}

sum(10, 36)

//this is Task3

function changesize(x, size) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task3" + "</p>")
    document.write("<p style='font-size: " + size + "px'>" + x + "</p>")
    document.write("<br>")
}

changesize('programing', 35)


//this is Task4

function changewidth(width) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task4" + "</p>")
    document.write("<table border='1' width='" + width + "px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<br>")
}

changewidth(200);


//this is Task5

function changeheight(height) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task5" + "</p>")
    document.write("<table border='1' height='" + height + "px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeheight(150)



//this is Task6

function maketable(width, height) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task6" + "</p>")
    document.write("<table border='1' width='" + width + "px' height='" + height + "px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

maketable(200, 200)



//this is Task7

function changecolor(color1, color2) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task7" + "</p>")
    document.write("<table border='1' width='250px' height='250px'>")
    document.write("<tr bgcolor=" + color1 + ">")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr bgcolor=" + color2 + ">")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changecolor('red', 'yellow')



//this is task8

function changeBorderSize(num) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task8" + "</p>")
    document.write("<table border='" + num + "' width='250px' height='250px'>")
    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

changeBorderSize(10)



//this is task9

function buildtable(x, y, b, a) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task9" + "</p>")
    document.write("<table border='" + b + "' width='" + x + "px' height='" + y + "px'>")
    document.write("<tr bgcolor='" + a + "'>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("<tr bgcolor='" + c + "'>")
    document.write("<td>1</td>")
    document.write("<td>1</td>")
    document.write("</tr>")

    document.write("</table>")
    document.write("<hr>")
}

buildtable(300, 350, 15, 'yellow')


//this is Task10
buildtable(400, 500, 10, 'green')



//this is Task11

function teenNatural() {

    document.write("<p style='font-size: 25px; margin:0 '>" + "Task11" + "</p>")

    for (let i = 1; i <= 10; i++) {
        document.write(i)
    }

    document.write("<hr>")
}

teenNatural()



//this is Task12


function naturalNumbers(n) {

    document.write("<p style='font-size: 25px; margin:0 '>" + "Task12" + "</p>")

    for (let i = 1; i <= n; i++) {
        document.write(i, "<br>")
    }

    document.write("<br>")
}

naturalNumbers(28)


//this is Task13

function naturalNumbers1(m, n) {

    document.write("<p style='font-size: 25px; margin:0 '>" + "Task13" + "</p>")

    for (let i = m; i <= n; i++) {
        document.write(i, "<br>")
    }

    document.write("<br>")
}

naturalNumbers1(24, 56)


//this is Task 15


function buildTable1(r, c) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task15" + "</p>")
    document.write("<table border='1' width='400px' height='200px'>")
    for (let i = 0; i < r; i++) {
        document.write("<tr>")
        for (let j = 1; j <= c; j++) {
            document.write("<td></td>")
        }
        document.write("</tr>")
    }

    document.write("</table>")
    document.write("<br>")
}

buildTable1(3, 5)



//this is Task16


function buildTable2(r, c) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task16" + "</p>")
    document.write("<table border='1' width='600px' height='400px'>")
    for (let i = 1; i <= r; i++) {
        document.write("<tr>")
        for (let j = 1; j <= c; j++) {
            document.write("<td>" + i + "" + '.' + "" + j + "</td>")
        }
        document.write("</tr>")
    }

    document.write("</table>")
    document.write("<br>")
}

buildTable2(5, 7)



//this is Task17

function buildTable3(w, h, b, c, r, c) {
    document.write("<p style='font-size: 25px; margin:0 '>" + "Task17" + "</p>")
    document.write("<table border='" + b + "' width='" + w + "px' height='" + h + "px'>")
    for (let i = 1; i <= r; i++) {
        document.write("<tr bgcolor='" + c + "'>")
        for (let j = 1; j <= c; j++) {
            document.write("<td>" + i + "" + '.' + "" + j + "</td>")
        }
        document.write("</tr>")
    }

    document.write("</table>")
    document.write("<hr>")
}

buildTable3(500, 300, 5, "yellow", 6, 8)
