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

function sum (...nums){ // Rest parameter
    return nums.reduce((c,d)=> c+d,0);
}
console.log(sum(1,2,3,4));

function processuser(name,callback){ //callback function
    console.log("Processing user: " + name);
    callback();
}

processuser("Harsh",()=>{
    console.log("User processed successfully!");
});
const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error:", err);
  }
};

// debounce + API
const search = debounce(async (query) => {
  const data = await fetchData(`https://api.com?q=${query}`);
  console.log(data);
}, 500);