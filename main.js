let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-btn");
let taskList = [];
let tabs = document.querySelectorAll(".task-tabs a");
let filterList = [];
let mode = "all";
let underLine = document.getElementById("under-line");

addButton.addEventListener("click",addTask);
taskInput.addEventListener("focus",function(){taskInput.value = ""})

taskInput.addEventListener("keyup",function (event){
  if (event.keyCode === 13){
    addTask(event);
  }
})

for(i=0; i<tabs.length; i++){
  tabs[i].addEventListener("click",function(event){filter(event)})
}

function addTask(){
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false
  }
  taskList.push(task);

  console.log(taskList);

  render();
}

function render(){
  let list = [];
  if(mode == "all"){
    list = taskList;
  }else if(mode == "ongoing" || mode == "done"){
    list = filterList;
  }


  let resultHTML = '';
  for(let i=0; i<list.length; i++){
    if(list[i].isComplete == true){
      resultHTML += `<div class="task task-done">
    <span>${list[i].taskContent}</span>
    <div>
      <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-rotate-left"></i></i></button>
      <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>`
    } else {
      resultHTML += `<div class="task">
    <span>${list[i].taskContent}</span>
    <div>
      <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
      <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>`
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function randomIDGenerate() {
  return Math.random().toString(36).substr(2, 16);
}

function toggleComplete(id) {
  console.log("id:",id);
  for(let i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}
function deleteTask(id) {
  // console.log("삭제하자");
  for(i=0; i<taskList.length; i++){
    if(taskList[i].id == id){
      taskList.splice(i,1);
    }
  }
  render();
  // console.log(taskList);
}
function filter(event) {
  if (event) {
    mode = "event.target.id";
    underLine.style.left = event.currentTarget.offsetLeft + "px";
    underLine.style.width = event.currentTarget.offsetWidth + "px";
    underLine.style.top = event.currentTarget.offsetTop + (event.currentTarget.offsetHeight - 4) + "px";
  }
  // console.log("filter",event.target.id)
  filterList = [];
  mode = event.target.id;
  if(mode == "all"){
    render();
  }else if(mode == "ongoing"){
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].isComplete == false){
        filterList.push(taskList[i]);
      }
    }
    render();
  }else if(mode == "done"){
    for(let i=0; i<taskList.length; i++){
      if(taskList[i].isComplete == true){
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}

// tabs.forEach(tab=>tab.addEventListener("click",(e)=>underIndicator(e)))


  