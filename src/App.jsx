import { useState } from "react";
import Table from "./components/Display/Table";
import AddTodos from "./components/Form/AddTodo/AddTodos";
import Header from "./components/Header/Header";
import EditTodo from "./components/Form/EditTodo";

const App = () => {
  const [isEditing, setEditing] = useState(false);

  const editModehandler = () => {
    setEditing(!isEditing);
  };

  return (
    <>
      <Header />
      {isEditing && <EditTodo editMode={editModehandler} />}
      {!isEditing && <AddTodos />}
      <Table editMode={editModehandler} />
    </>
  );
};

export default App;
