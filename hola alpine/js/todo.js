let todoApp = () => {
  return {
    todos: [],
    userInput: '',
    addTask() {
      console.log('addTask');
      this.todos.push({ name: this.userInput, completed: false });
      this.userInput = '';
    },
    checkTask(e, index) {
      const elem = e.target;
      const p = elem.parentNode.firstElementChild;
      /* p.classList.toggle('line-through'); */
      this.todos[index].completed = !this.todos[index].completed;
      console.log(this.todos);
    },
    removeTask(todo) {
      /* const elem = e.target;
      const li = elem.parentNode;
      lista.removeChild(li); */
      this.todos = this.todos.filter(function (currTodo) {
        return currTodo != todo;
      });
    },
  };
};
