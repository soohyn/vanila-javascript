class ToDoList {
  target;
  title;
  items = [];

  constructor(todo) {
    this.target = document.querySelector("#to-do-container");
    this.setup(todo);
    this.render();
  }
  setup(todo) {
    this.title = todo.title;
  }

  template() {
    return `
  <div id="to-do-box" class="to-do-box">
  <h2 id="to-do-title">Study</h2>
  <div class="to-do-list"></div>
  <button>
  추가
  <img class="icon add" src="./assets/line-plus-svgrepo-com.svg" />
  </div>
  `;
  }

  render() {
    this.target.innerHTML = this.template();
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
