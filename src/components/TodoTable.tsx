import React from "react";
import {TodoRowItem} from "./TodoRowItem"

export const TodoTable : React.FC<{
    todos:TodoModel[],
    deleteTodos:Function
}> = (props) => {
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo=>(
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodos={props.deleteTodos}
                    />
                ))}
            </tbody>
        </table>
    )
}