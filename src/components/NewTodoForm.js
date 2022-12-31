import React, {useState} from 'react'
import MyModal from './MyModal';

function NewTodoForm(props){
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const [modalStatus, setModalStatus] = useState(false);
    const submitTodo = () => {
        if(description!==''&&assigned!==''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }else{
            setModalStatus(true);
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
            <MyModal show={modalStatus} onHide={()=>setModalStatus(false)}/>
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
                    rows={3} required
                    onChange={e => setDescription(e.target.value)}
                    value={description}></input>
                </div>
                <button 
                type='button' 
                className='btn btn-primary mt-3'
                onClick={submitTodo}>
                    <i class="bi bi-send-plus-fill"></i>
                    &nbsp;Create New Todos
                </button>
            </form>
        </div>
    )
}

export default NewTodoForm;