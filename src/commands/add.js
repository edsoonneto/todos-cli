import Conf from "conf";
import chalk from "chalk";

const config = new Conf({ projectName: "todo-list" });

export default function add(task) {
  let todoList = config.get("todo-list");

  if (!todoList) {
    todoList = [];
  }

  todoList.push({
    text: task,
    done: false,
  });

  config.set("todo-list", todoList);

  console.log(chalk.green.bold("Task has been added successfully!"));
}
