var todoInput = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");
function addTodo() {
  console.log(todoInput.value);
  todoList.innerHTML += `<ul class="list-unstyled p-0 m-0">
                <li
                  class="todo-item d-flex align-items-center justify-content-between"
                >
                  <div class="d-flex align-items-center gap-3">
                    <div class="task-icon" style="cursor: pointer">
                      <i class="fa-regular fa-circle text-info fs-5"></i>
                    </div>
                    <div>
                      <p class="m-0 fw-medium task-text">
                       ${todoInput.value}
                      </p>
                      <small class="text-secondary" style="font-size: 10px">
                        <i class="fa-regular fa-clock me-1"></i> ${moment().format('LT')}
                      </small>
                    </div>
                  </div>
                  <div class="d-flex gap-3 action-icons">
                    <i
                      class="fa-solid fa-pen-to-square edit-btn text-secondary"
                      style="cursor: pointer"
                    ></i>
                    <i
                      class="fa-solid fa-trash-can delete-btn text-secondary"
                      style="cursor: pointer" onclick="deletTodo(this)"
                    ></i>
                  </div>
                </li>
              </ul>`;
  todoInput.value = "";
}


function deletTodo(dltBtn){
dltBtn.closest(".list-unstyled").innerHTML = "";
}
function clearAll(){
    todoList.innerHTML = "";
}
