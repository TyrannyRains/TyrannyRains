function createArray()
{
    var taskArray = [];
    var tasks = localStorage.getItem('itemList');
    if(tasks != null)
    {
          //Code Runs if the Condition is met
         taskArray = JSON.parse(tasks);
    }
    return taskArray;
}

/* Adds a Task to the List
Creates an Array
Creates a Variable to store the information in the input field
Clears the information in the input field 
Pushes the Task into our Array
Stores the updated TaskList in the Browser
Calls the DisplayTask function
*/
function addTask()
{
    var taskList = createArray();
    var task = document.getElementById("taskValue").value;
    document.getElementById("taskValue").value = "";
    taskList.push(task);
    localStorage.setItem('itemList', JSON.stringify(taskList));
    displayTask();
}
/* Removes a Task from the List
Creates a Variable to store the correct button information
this - As in "This" Button that has been clicked
Creates an Array
Removes the Task from our Array and defines how many items we need to remove
Stores the updated TaskList in the Browser
Calls the DisplayTask function
*/
function removeTask()
{
    //Remove Trasks from the Array
    var rID = this.getAttribute("id");
    var taskList = createArray();
    taskList.splice(rID, 1);
    localStorage.setItem('itemList', JSON.stringify(taskList));
    displayTask();
} 
/* Displays Tasks in the List
Creates the Array of Tasks 
Creates the Variable to Store the List items
LOOP STATEMENT - Adds HTML to each List Item in the Array (Repeats until the end of the)
Replaces the Content in the Section Tag with id="content"
Creates a Button Array
LOOP STATEMENT - Adds an EventListener to each Button in the List
*/
function displayTask()
{
    var taskList = createArray();
    var showTasks = "<ul>";

    for(var i=0; i < taskList.length; i++)
    {
        showTasks += "<li>"+taskList[i]+"<button class='rmvBtn' id='"+i+"'>Remove</button></li>";
    }
    showTasks += "</ul>";

    document.getElementById("content").innerHTML = showTasks;

    var btnArray = document.getElementsByClassName("rmvBtn");
    for(i =0; i < btnArray.length; i++)
    {
        btnArray[i].addEventListener('click', removeTask);
    }

}

displayTask();