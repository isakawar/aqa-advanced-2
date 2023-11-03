const users = [{
    firstName: "James",
    lastName: "Lebron",
    email: "lebron1984@gmail.com",
    age: 38
},{
    firstName: "Ivan",
    lastName: "Mazepa",
    email: "mazepa17@gmail.com",
    age: 70
},
    {
    firstName: "Kirill",
    lastName: "Mudriy",
    email: "sdfaioi@gmail.com",
    age: 18
}]

for (const user of users) {
    console.log(user)
}

for (const { firstName, lastName, email, age } of users) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Age: ${age}`);
}
