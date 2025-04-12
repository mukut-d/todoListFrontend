import { useContext } from "react";
import { Context } from "../../store/todoContext";

import "./Table.css";
const Table = ({ editMode }) => {
  const { todo, editTodo, deleteTodo } = useContext(Context);
  return (
    <div className="main-table">
      <div className="title">Display Todos</div>
      <table className="table">
        <thead style={{}}>
          <tr className="tHead">
            <th>Sl</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tBody">
          {todo?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{`${todo?.length - item?.id + 1}`}</td>
                <td>{item.todo}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      editTodo(item?.id);
                      editMode();
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn"
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
          {/* <tr>
            <td>{1}</td>
            <td>{`Pickup Grocery`}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
