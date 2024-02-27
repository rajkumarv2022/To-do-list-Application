function addtask()
{
    //search for input element wth id add-task input
    var task = document.getElementById('task-input').value
    console.log(task);
    
    if(task.trim()!='')
    {
    
    document.getElementById('task-input').value=''
    var totalTask=document.getElementById('total-task')
    
    var taskCount = document.getElementById('task-list').childElementCount
    totalTask.textContent=taskCount + 1
    //create a new list item with one task

    var taskItem = document.createElement('li')
    taskItem.textContent=task
    
    taskItem.className="flex flex-row justify-between  border bg-white shadow-sm py-4 rounded-2xl px-4 mt-4";
    document.getElementById('task-list').appendChild(taskItem)

    //create button by manipulating dom
    var deleteButton = document.createElement('button')

    //set text for button
    deleteButton.textContent='Delete'

    //set class for delete button
    deleteButton.className='flex bg-red-500 text-white px-4 py-2 rounded-full '

    //Add event listener

    deleteButton.addEventListener('click',function() {
        taskItem.remove()

        var taskCount = document.getElementById('task-list').childElementCount
    totalTask.textContent=taskCount
    }

    
    )

    taskItem.appendChild(deleteButton);

}
}

function deleteAll()
{
    document.getElementById('task-list').innerHTML=''
    document.getElementById('total-task').innerHTML='0'
}