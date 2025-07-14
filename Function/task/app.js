const tasks = [];

function addtask(taskNmae ,isImprtant = false){
    tasks.push({name:taskNmae,isImprtant,done:false})
    console.log(`Added:${taskNmae}`);
}
// HOF that takes a callback to filter
function listTasks(filterFn = () => true) {
  console.log("Tasks:");
  tasks.filter(filterFn).forEach(function(task, index) {
    const status = task.done ? "✅" : "❌";
    const mark = task.isImportant ? "[!]" : "";
    console.log(`${index + 1}. ${task.name} ${mark} ${status}`);
  });
}
function markedDone (index){
    if(tasks[index]){
        tasks[index].done=true;
        console.log(`task as marked done: ${tasks[index].name}`);
    }
    else{
        console.log("the task index is not found!");
    }
}


function runApp(){
    addtask("html task",true);
    addtask("css taks");
    addtask("oop task!")

    markedDone(1);
    listTasks();

    // seaerch task 
    listTasks(task => task.isImportant);
}


runApp();