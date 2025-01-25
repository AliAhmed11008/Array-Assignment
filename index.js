
let toDoList = [];


toDoList.push("Finish homework", "Clean the room", "Buy groceries");


toDoList.unshift("Call Mom", "Pay bills");


console.log("Current toDoList:", toDoList);


let completedTask = toDoList.pop();
console.log("Completed task:", completedTask);


let anotherCompletedTask = toDoList.shift();
console.log("Another completed task:", anotherCompletedTask);


console.log("Updated toDoList:", toDoList);
