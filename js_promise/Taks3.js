const urlTodo = "https://jsonplaceholder.typicode.com/todos/1";
const urlUser = "https://jsonplaceholder.typicode.com/users/1";

async function fetchTodo() {
  const response = await fetch(urlTodo);
  return await response.json();
}

async function fetchUser() {
  const response = await fetch(urlUser);
  return await response.json();
}

async function fetchData() {
  const [todoResult, userResult] = await Promise.all([
    fetchTodo(),
    fetchUser(),
  ]);

  console.log("Data from Promise.all:");
  console.log("Todo:", todoResult);
  console.log("User:", userResult);

  const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
  console.log("\nData from Promise.race:");
  console.log(raceResult);
}

fetchData();
