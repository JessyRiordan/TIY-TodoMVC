// var chai = require('chai')
//    expect = chai.expect;

var expect = require('chai').expect;

var taskList = [ ];

// I can list my tasks...
function listTasks(){
}

function addTaskToList(task, list){
  return list.push(task)
}

function deleteTaskFromList (position, list){
  return list.splice(position, 1);
}

expect(taskList).to.exist
expect(listTasks).to.exist
expect(addTaskToList).to.exist
expect(taskList.length).to.equal(0);
console.log("This should be an empty task list:");
console.log(taskList);

addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);
console.log("This should be a task list with one task:");
console.log(taskList);

expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);
console.log("This should be a task list with two tasks:");
console.log(taskList);

expect(taskList.length).to.equal(2);
addTaskToList("Clean up cat litter", taskList);
expect(taskList[2]).to.equal("Clean up cat litter");
expect(taskList.length).to.equal(3);
console.log("This should be a task list with three tasks:");
console.log(taskList);

expect(taskList.length).to.equal(3);
deleteTaskFromList(2, taskList);
expect(taskList.length).to.equal(2);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList[2]).to.equal(undefined);
console.log("This should be a task list with two tasks, Clean up the cat litter was deleted:"); 
console.log(taskList);
