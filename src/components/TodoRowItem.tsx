import React from "react";

export const TodoRowItem : React.FC<{
    rowNumber:number,
    rowDescription:string,
    rowAssigned:string,
    deleteTodos:Function
}> = (props) => {
    const rowNumber = 1;
    const rowDescription = "Feed Cat";
    const rowAssigned = "Syahmie";
    return(
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td>
                <button className="btn btn-danger" 
                        onClick={()=>props.deleteTodos(props.rowNumber)}>
                        <i className="bi bi-trash-fill"></i>
                </button>
            </td>
        </tr>
    )
}