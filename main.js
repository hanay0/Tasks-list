// define ui variables
const form = document.querySelector('#task-form'),
      tasklist = document.querySelector('.collection'),
      clearBtn = document.querySelector('.clear-tasks'),
      filter = document.querySelector('#filter'),
      taskInput = document.querySelector('#task');


// load all event listeners
loadEventListeners();

// loadEventListeners function
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    tasklist.addEventListener('click', removeTask);
    // clear tasks events
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// add task function
function addTask(e) {
    if(taskInput.value === '') {
        alert('You Should Add a task');
        tasklist.prepend(li);
    }

    // create li element
    const li = document.createElement('li');
    // adding a class to the li
    li.className = 'collection-item';
    // create a text nodeand append it to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element for closing or deleting the task
    const link = document.createElement('a');
    // adding a class to it
    link.className = 'delete-item secondary-content';
    // add fontawesome icon
    link.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';
    //append the link to the li
    li.appendChild(link);

    // append this li to the ul 'collection' => list of tasks
    tasklist.appendChild(li);
    // then, removing input content
    taskInput.value = '';

 e.preventDefault(); 
}

// remove task function
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('You Want to delete ?')){  // confirmation decision
    e.target.parentElement.parentElement.remove();
        }
    }
}

// clear tasks function
function clearTasks () {
    // 1 : tasklist.innerHTML = '';

    // 2 : faster than removing inner html content
    while(tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
}

// filter tasks function
function filterTasks (e) {
    const taskText = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(x => {
        const item = x.firstChild.textContent;
        if(item.toLowerCase().indexOf(taskText) != -1) {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    });
}