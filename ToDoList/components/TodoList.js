class ToDoList {
  target;
  todoList = [];

  constructor(todoList) {
    this.target = document.querySelector("#to-do-container");
    this.setup(todoList);
    this.render();
  }

  setup(todoList) {
    this.todoList = todoList;
  }

  template() {
    for (var i = 0; i < todoList.length; i++) {
      const todo = new ToDo();
    }
  }

  addTodo(name) {
    todoList.push({ title: "hi", items: [] });
  }

  deleteTodo(index) {
    todolist.splice(index, 1);
  }

  render() {
    this.target.innerHTML = this.target.innerHTML + this.template();
    this.setEvent();
  }

  setEvent() {
    this.target.querySelector("button").addEventListener("click", () => {
      console.log("[new]");
    });
  }
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

class ToDo {
  target;
  title;
  todo = [];

  constructor(target, todo) {
    this.target = document.querySelector("#to-do-container");
    this.setup(todo);
    this.render();
  }
  setup(todo) {
    this.title = todo.title;
  }

  template() {
    const top = '<div id="to-do-box" class="to-do-box">';
    const middle = '<h2 id="to-do-title">' + this.title + "</h2>";
    const bottom = `
    <div class="to-do-list"></div>
  <button>
  추가
  <img class="icon add" src="./assets/line-plus-svgrepo-com.svg" />
  </div>
    `;
    return top + middle + bottom;
  }

  render() {
    this.target.innerHTML = this.target.innerHTML + this.template();
    this.setEvent();
  }

  setEvent() {
    this.target.querySelector("button").addEventListener("click", () => {
      console.log("[new]");
    });
  }

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
