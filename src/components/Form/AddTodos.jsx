import { useContext, useState } from "react";
import { Context } from "../../store/todoContext";

const AddTodos = () => {
  const [todo, setTodo] = useState("");
  const { saveTodo } = useContext(Context);

  const addTodohandler = (e) => {
    setTodo(e.target.value);
  };

  const saveTodoHandler = () => {
    saveTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter todos"
        value={todo}
        onChange={addTodohandler}
      />
      <button onClick={saveTodoHandler}>Add</button>
    </div>
  );
};

export default AddTodos;
