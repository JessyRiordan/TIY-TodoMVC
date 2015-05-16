(function(window) {
  'use strict';

  var newTodoInput = document.querySelector('input.new-todo');

  newTodoInput.addEventListener('keyup', function addTodoController(event) {
    if (event.keyCode !== 13 || newTodoInput.value === "") return;

    var task = newTodoInput.value,
      todoCountElement = document.querySelector('span.todo-count');

    todos.addTask(task, todos.taskList);

    newTodoInput.value = "";

    var todoCount = document.querySelector('span.todo-count');
    todos.footerCount(todoCount);


    //todoCountElement.text = todoCountText;

    document.querySelector('ul.todo-list').innerHTML += (
      "<li><div><input class= 'toggle' type= 'checkbox'><label>" + task + "</label><button class= 'destroy'></input></div></li>"
    )

    console.log(todos.taskList);

  });

  var deleteTask = document.querySelector("ul.todo-list");
  var deleteTaskButton = document.querySelectorAll('button.destroy');
  // deleteTask.addEventListener('mouseover', function delteTaskController(event){
  // 	console.log("hello");
  // });

  _.forEach(deleteTaskButton, function(element, index, deleteTaskButton) {
    element.addEventListener('click', function() {
      console.log("delete works");
    });
  });

  var editTask = document.querySelectorAll("li");
  _.forEach(editTask, function(element, index, editTask) {
    element.addEventListener("dblclick", function() {
      console.log("i can edit");
    });
  });

})(window);

// TO ADD A NEW TASK: CONTROLLER
// GIVEN an HTML element <input class="new-todo">
// WHEN the user types a task AND presses the "Enter" key
// THEN
// 1. Click on "What needs to be done?" (input.new-todo)
// 2. Type the thing you want to remember (task!).
// 3. Press the "Enter" key
// 4. ROBOT: Save the thing to remember (task) to the list of things to remember (taskList)
// 5. ROBOT: Remove the thing to remember (task) from the "What needs to be done?" box (input.new-todo)
// 6. ROBOT: Update the number of tasks in the footer....
// 7. ROBOT: Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)

//DELETE A TASK: CONTROLLER
// 1. What event should I be listening for? mouseover, click
// 2. What element makes sense to listen for that event? li....button.destroy? ul.todo-list
// 3. What do I need to do when that event fires?
// 1. Remove from where it's saved
// 2. Delete task field on the display
// 3. update task # or remove it if 0


// CONTROLLER FOR: I can edit a task on my list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?


// CONTROLLER FOR: I can complete a task on my list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?

// CONTROLLER FOR: I can view the list...
// 1. What event should I be listening for?
// 2. What element makes sense to listen for that event?
// 3. What do I need to do when that event fires?
