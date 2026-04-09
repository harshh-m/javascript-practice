try {
  let data = JSON.parse('invalid json');
} catch (err) {
  console.log("Error aa gaya:", err.message);
}
try {
  console.log("Try block");
} catch (e) {
  console.log("Error");
} finally {
  console.log("Always run hoga");
}
function checkAge(age) {
  if (age < 18) {
    throw new Error("Underage!");
  }
  return "Allowed";
}

try {
  checkAge(15);
} catch (e) {
  console.log(e.message);
}