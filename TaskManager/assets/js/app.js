const taskInput = document.querySelector("#task"); //the task input text field

const form = document.querySelector("#task-form"); //The form at the top

const filter = document.querySelector("#filter"); //the task filter text field

const taskList = document.querySelector(".collection"); //The ul

const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button

const sortlist = document.querySelector(".browser-default");

const reloadIcon = document.querySelector(".fa"); //the reload button at the top navigation

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit
form.addEventListener("submit", addNewTask);

// Clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);

//   Filter Task
filter.addEventListener("keyup", filterTasks);
// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);
//Event listener for sort in ascending and descending order
sortlist.addEventListener("change", sortTaskLists);
// Add New  Task Function definition
function addNewTask(e) {
  // Check empty entry
  if (taskInput.value === "") {
    taskInput.style.borderColor = "red";

    return;
  }

  // Create an li element when the user adds a task
  const li = document.createElement("li");
  // Adding a class
  li.className = "collection-item";
  //get new value's creation date in seconds
  li.value = new Date().getTime();
  // Create text node and append it
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  // Append to UL
  taskList.appendChild(li);

  e.preventDefault(); //disable form submission
}

// Clear Task Function definition
function clearAllTasks() {
  //This is the first way
  // taskList.innerHTML = '';

  //  Second Wy
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Filter tasks function definition
function filterTasks(e) {
  const keyword = filter.value;
  const tasts_list = document.querySelectorAll(".collection-item");
  tasts_list.forEach(function (words) {
    if (words.firstChild.textContent.indexOf(keyword)) {
      words.style.display = "none";
    } else {
      words.style.display = "block";
    }
  });
}

// Remove Task function definition
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Reload function
function reloadPage() {
  //using the reload fun on location object
  location.reload();
}

function sortTaskLists() {
  const addeddTasks = document.querySelectorAll(".collection-item");

  let taskDates = [];

  addeddTasks.forEach(function (words) {
    taskDates.push(words.value);
  });

  taskDates.sort();

  let len = taskDates.length;

  if (sortlist.value == "0") {
    for (let i = 0; i < len; i++) {
      addeddTasks.forEach(function (words) {
        if (taskDates[i] == words.value) {
          taskList.appendChild(words);
        }
      });
    }
  } else {
    for (let i = len; i >= 0; i--) {
      addeddTasks.forEach(function (words) {
        if (taskDates[i] == words.value) {
          taskList.appendChild(words);
        }
      });
    }
  }
}


