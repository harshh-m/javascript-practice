const user = {
  name: "Harsh",
  age: 19,
  greet() {
    console.log("Hello " + this.name);
  }
};

user.greet();

const { name, age } = user;