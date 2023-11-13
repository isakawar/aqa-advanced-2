const urlTodo = "https://jsonplaceholder.typicode.com/todos/1";
const urlUser = "https://jsonplaceholder.typicode.com/users/1";

async function fetchTodo() {
  return await fetch(urlTodo)
    .then((response) => response.json())
    .then((todo) => todo)
    .catch((error) => {
      console.error("Error fetching todo:", error);
      throw error;
    });
}

async function fetchUser() {
  return await fetch(urlUser)
    .then((response) => response.json())
    .then((user) => user)
    .catch((error) => {
      console.error("Error fetching user:", error);
      throw error;
    });
}

async function fetchData() {
  try {
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
  } catch (error) {
    console.error("Error in fetchData:", error);
  }
}

fetchData();
