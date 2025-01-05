import { uid } from "../utils/utils.js";

export class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.id = uid();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}
