const urlTodo = "https://jsonplaceholder.typicode.com/todos/1"
const urlUser = "https://jsonplaceholder.typicode.com/users/1"

function fetchTodo() {
    return fetch(urlTodo)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(todo => todo)
        .catch(error => {
            console.error('Error fetching todo:', error)
            throw error
        })
}

function fetchUser() {
    return fetch(urlUser)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(user => user)
        .catch(error => {
            console.error('Error fetching user:', error)
            throw error
        })
}

function fetchData() {
    const todoPromise = fetchTodo()
    const userPromise = fetchUser()

    Promise.all([todoPromise, userPromise])
        .then(results => {
            const todoResult = results[0]
            const userResult = results[1]

            console.log('Data from Promise.all:')
            console.log('Todo:', todoResult)
            console.log('User:', userResult)
        })
        .catch(error => {
            console.error('Error in Promise.all:', error)
        })

    Promise.race([fetchTodo(), fetchUser()])
        .then(raceResult => {
            console.log('\nData from Promise.race:')
            console.log(raceResult)
        })
        .catch(error => {
            console.error('Error in Promise.race:', error)
        })
}

fetchData()
