/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

// Instructions
// - Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/day-4-todo-lists-template-2phy2?from-embed=&file=/index.js
// - ⚠ Do not code your solution in CodeSandbox ⚠ Copy-paste the existing .js files into your project
// - Create an alert that lists all users, with their ids, names and what city they're from
// - Prompt the user for a user id
// - Display an alert with the username and all the todos titles that belong to that user 

// Tips
// - The user id creates an identifiable relationship with the todos
// - Sometimes it's good to map some values into a new data structure

// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list

// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program

console.log("users: ", window.users);

console.log("todos: ", window.todos);

let displayedInfo = []

for (let i = 0; i < window.users.length; i++) {
    displayedInfo.push(
        ['ID:', window.users[i].id], ['Name:', window.users[i].name], ['City', window.users[i].address.city]
    )
}


alert(`These are the users: \n${displayedInfo.join('\n')}`)

const inputUserID = Number(prompt("Please enter user id:"))


console.log(inputUserID)
let todoList = []

for (let i = 0; i < window.todos.length; i++) {
    if (window.todos[i].userId === inputUserID && window.todos[i].completed === false) {
        todoList.push([`Task title: ${window.todos[i].title}`])
    }
}
console.log(todoList)
alert(`User with ID: ${inputUserID} and name: ${window.users[inputUserID+1].name} has these tasks to do: \n${todoList.join('\n')}
`)