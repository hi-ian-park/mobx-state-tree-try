import { destroy, getRoot, types } from "mobx-state-tree";

// state 관리하는 쪽

const Todo = types
  .model("TodoItem", {
    id: types.number,
    label: types.string,
  })
  .actions((self) => {
    return {
      remove() {
        getRoot(self).removeTodo(self);
      },
      setLabel(text: any) {
        self.label = text;
      },
    };
  });

const Store = types
  .model("Store", {
    todoList: types.array(Todo),
  })
  .actions((self) => {
    return {
      addTodo(todo: any) {
        self.todoList.push(todo);
      },
      removeTodo(todo: any) {
        destroy(todo);
      },
    };
  });

export default Store;
