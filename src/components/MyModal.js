import {Modal} from 'react-bootstrap/Modal';
function MyModal(props){
    return(
        <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen="sm-down"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
            System says...
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            Please Check Your Form
            </p>
        </Modal.Body>
        </Modal>
    );
}

export default MyModal;