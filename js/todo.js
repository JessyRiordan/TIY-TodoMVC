

(function(window){
    var taskList = [];

    function listTasks(list){
    }

    function addTask(task, list){
      return list.push(task);
    }

    function footerCount(element){
       if ( taskList.length === 1 ) {
         element.textContent = taskList.length + " Item Left";
       } else {
         element.textContent = taskList.length + " Items Left";
       }
    }

    function deleteTask (position, list){
      return list.splice(position, 1);
    }

    window.todos = {
      "taskList": taskList,
      "addTask": addTask,
      "footerCount": footerCount,
      // "completeTask": completeTask,
      "deleteTask": deleteTask
    };

})(window);
