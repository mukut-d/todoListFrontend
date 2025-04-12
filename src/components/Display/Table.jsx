import { useContext } from "react";
import { Context } from "../../store/todoContext";

const Table = ({ editMode }) => {
  const { todo, editTodo, deleteTodo } = useContext(Context);
  return (
    <div>
      <div>Display Todos</div>
      <table>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todo?.map((item) => {
            return (
              <tr>
                <td>{`${todo?.length - item?.id + 1}`}</td>
                <td>{item.todo}</td>
                <td>
                  <button
                    onClick={() => {
                      editTodo(item?.id);
                      editMode();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteTodo(item?.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>{1}</td>
            <td>{`Pickup Grocery`}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
