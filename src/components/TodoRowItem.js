function TodoRowItem(props){
    const rowNumber = 1;
    const rowDescription = "Feed Cat";
    const rowAssigned = "Syahmie";
    return(
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td>
                <button class="btn btn-danger" 
                        onClick={()=>props.deleteTodos(props.rowNumber)}>
                        <i class="bi bi-trash-fill"></i>
                </button>
            </td>
        </tr>
    )
}

export default TodoRowItem;