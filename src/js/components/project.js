import { uid } from "../utils/utils.js";

export class Project {
  constructor(title, description) {
    this.id = uid();
    this.title = title;
    this.description = description;
    this.todos = [];
    this.lastVisited = new Date();
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
