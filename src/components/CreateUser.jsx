import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function CreateUser() {
    const [show, setShow] = useState(false);
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [number_of_weeks, setnumber_of_weeks] = useState('');
    const [Image, setImage] = useState('');
    const [date, setdate] = useState('');



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createCourse = (title, desc, number_of_weeks, image, Start_date) => {
        return axios.post("https://666287eb62966e20ef08eb3b.mockapi.io/Course", {
            title: title,
            desc: desc,
            number_of_weeks: number_of_weeks,
            image: image,
            Start_date: Start_date,
            active: 1
        });
    }

    const closeAdd = async () => {
        let res = await createCourse(Title, Description, number_of_weeks, Image, date);
        if (res) {
            handleClose();
        }
    }
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Create new Course
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><label>Title: </label> <br></br>
                        <input type='text' placeholder='Title' style={{ marginBottom: "20px" }} value={Title} required="" onChange={(event) => {
                            setTitle(event.target.value)
                        }}></input> <br></br></div>
                    <label>Description: </label> <br></br>
                    <input type='text' placeholder='Description' style={{ marginBottom: "20px" }} value={Description} onChange={(event) => {
                        setDescription(event.target.value)
                    }}></input><br></br>
                    <label>Number of weeks: </label> <br></br>
                    <input type='number' placeholder='Number of weeks' required="" style={{ marginBottom: "20px" }} value={number_of_weeks} onChange={(event) => {
                        setnumber_of_weeks(event.target.value)
                    }}></input><br></br>
                    <label>Image: </label> <br></br>
                    <input type='text' placeholder='Image' style={{ marginBottom: "20px" }} value={Image} onChange={(event) => {
                        setImage(event.target.value)
                    }}></input><br></br>
                    <label>Start date: </label><br></br>
                    <input type='date' placeholder='Start date' style={{ marginBottom: "20px" }} value={date} onChange={(event) => {
                        setdate(event.target.value)
                    }}></input><br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeAdd}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateUser;



