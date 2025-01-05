import "./css/global.css";
import "./css/main.css";

import { Todo } from "./js/components/todo";
import { Project } from "./js/components/project";
import * as Storage from "./js/utils/storage";


const projectList = document.querySelector(".project-list");
const projects = [];


// Load projects from local storage
if (!Storage.isAvailable("localStorage")) {
  projects.push(...Storage.loadData());
}

projectList.addEventListener("click", (e) => {
  if (e.target.classList.contains("project")) {
    console.log(e.target);
  }
});
