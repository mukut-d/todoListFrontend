import { createContext, useState } from "react";

export const Context = createContext({
  todo: [],
  saveTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  saveEdit: () => {},
});

const TodoContext = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState({});

  const saveTodoHandler = (todo) => {
    setTodo((prev) => {
      return [{ id: prev?.length + 1, todo: todo }, ...prev];
    });
  };

  const editTodoHandler = (id) => {
    setEditTodo(() => {
      const fil = [...todo.filter((item) => item?.id === id)];
      // console.log("fil " + todo.filter((item) => item?.id === id));
      const obj = { id: fil[0].id, todo: fil[0].todo };
      return { ...obj };
    });
  };

  const deleteTodoHandler = (id) => {
    setTodo((prev) => {
      console.log("cuuren todo " + prev);

      const updatedTodo = prev
        .filter((item) => item.id !== id)
        .map((item, index) => {
          return { id: index + 1, todo: item.todo };
        });

      return updatedTodo.sort((a, b) => b.id - a.id);
    });
  };

  const saveEditHandler = (todo) => {
    console.log("todo in saveEdit " + todo);
    setTodo((prev) => {
      const updatedTodo = prev.map((item) => {
        if (item.id === todo.id) return todo;
        return item;
      });
      return updatedTodo;
    });
  };

  const todoValues = {
    todo: todo,
    editedTodo: editTodo,
    saveTodo: saveTodoHandler,
    editTodo: editTodoHandler,
    deleteTodo: deleteTodoHandler,
    saveEdit: saveEditHandler,
  };
  return <Context.Provider value={todoValues}>{children}</Context.Provider>;
};

export default TodoContext;
