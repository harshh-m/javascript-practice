function add(a,b){
    return a+b;
}
console.log(add(5,3));

function param(month ="April"){ //default parameter
    console.log(month);
}
param();

function greet(name){ //parameter passed to the function
    return "Hello," +name+"!";
}
console.log(greet("Harsh")); //argument passed to the function

function sum (...nums){
    return nums.reduce((c,d)=> c+d,0);
}
console.log(sum(1,2,3,4));