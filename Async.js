async function getData() {
  try {
    const res = await fetch("wrong-url");
    const data = await res.json();
  } catch (err) {
    console.log("Fetch error:", err);
  }
}