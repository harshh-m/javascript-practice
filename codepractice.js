function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// search function
async function searchUsers(query) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );

    const users = await res.json();

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    console.log(filtered);

  } catch (error) {
    console.log("Search Error:", error.message);
  }
}

// debounce apply
const smartSearch = debounce(searchUsers, 500);

// use
smartSearch("Le");
smartSearch("Lea");
smartSearch("Lean");