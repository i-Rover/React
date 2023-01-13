import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';

export const NewTodoForm : React.FC<{
    addTodo:Function
}> = (props) => {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [modalStatus, setModalStatus] = useState(false);
    const submitTodo = () => {
        if(description!==''&&assigned!==''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }else{
            // setModalStatus(true);
            alert("Please check your again!");
        }
    }
    // const descriptionChange = (event) =>{
    //     setDescription(event.target.value);
    // }
    // const assignedChange = (event) =>{
    //     setAssigned(event.target.value);
    // }
    return(
        <div className="mt-5">
            {/* <myModal show={modalStatus} onHide={()=>setModalStatus(false)}/> */}
            <form>
                <div className="mb-3">
                    <label className='form-label'>Assigned</label>
                    <input 
                    type="text" 
                    className='form-control' 
                    required
                    onChange={e => setAssigned(e.target.value)}
                    value={assigned}></input>
                </div>
                <div className="mb-3">
                    <label className='form-label'>Description</label>
                    <input 
                    type="text" 
                    className='form-control' 
                    required
                    height={300}
                    onChange={e => setDescription(e.target.value)}
                    value={description}></input>
                </div>
                <button 
                type='button' 
                className='btn btn-primary mt-3'
                onClick={submitTodo}>
                    <i className="bi bi-send-plus-fill"></i>
                    &nbsp;Create New Todos
                </button>
            </form>
        </div>
    )
}
