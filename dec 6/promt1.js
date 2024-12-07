function start() {

    let num1 = window.parseInt(prompt("enter no. 1"))   //parse int is to convert string to integer parse float is used to convert string to float

    console.log(num1)
    let num2 = window.parseInt(prompt("enter no. 1")) //when we give the no. to variables and we need to add ans will show in string untill we do type casting
    console.log(num2)
    let ans = window.alert(num1 + num2) // ans will come in string until we do type casting 
    console.log(Number("ans"))

}

start();