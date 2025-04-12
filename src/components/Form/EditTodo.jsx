import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/todoContext";

const EditTodo = ({ editMode }) => {
  const { editedTodo, saveEdit } = useContext(Context);
  const [todo, setTodo] = useState(editedTodo);

  const editTodohandler = (e) => {
    setTodo((prev) => {
      return { ...prev, todo: e.target.value };
    });
  };

  const saveEditHandler = () => {
    saveEdit(todo);
    setTodo({ id: "", todo: "" });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter todos"
        value={todo.todo}
        onChange={(e) => {
          editTodohandler(e);
        }}
      />
      <button onClick={saveEditHandler}>Save</button>
      <button onClick={editMode}>Cancel</button>
    </div>
  );
};

export default EditTodo;
